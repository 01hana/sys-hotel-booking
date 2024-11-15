export const getFormatLocalePackage = async value => {
  const { getLocale } = await import('@core/utils/utils')

  const locale = value || getLocale()

  const packageConfigurations = {
    en: 'enUS',
    'zh-TW': 'zhTW'
  }

  const isPackageExist = packageConfigurations.hasOwnProperty(locale)

  const variableStr = isPackageExist ? packageConfigurations[locale] : 'zh-TW'

  const { [variableStr]: localPackage } = await import('date-fns/locale')

  return localPackage
}

export const format = async ({ isDateTime, isTime, isRange }) => {
  const { getLocale } = await import('@core/utils/utils')

  const locale = getLocale()

  if (isTime) return 'HH:mm'

  const formatLocale = {
    en: () => (isDateTime ? `MM/dd/yyyy HH:mm` : `MM/dd/yyyy`),
    'zh-TW': () => (isDateTime ? `yyyy/MM/dd HH:mm` : `yyyy/MM/dd`)
  }

  const isFormatExist = formatLocale.hasOwnProperty(locale)

  if (!isFormatExist) formatLocale['zh-TW']()

  return formatLocale[locale]()
}

export const formatFns = async ({ datetime, isDateTime, isTime, isRange }, isSetField) => {
  if (!datetime) return null

  const { default: formatFns } = await import('date-fns/format')

  const formatStr = await format({ isDateTime, isTime })

  const isDateType = Object.prototype.toString.call(datetime) === '[object Date]'
  const isArrayType = Array.isArray(datetime) && !isDateType
  const isStringType = typeof datetime === 'string' && !isDateType

  if (isRange && isTime && isArrayType) {
    const [startTime, endTime] = datetime

    if (isSetField) {
      const isStartStringType = typeof startTime === 'string' && !isDateType
      const isEndStringType = typeof endTime === 'string' && !isDateType

      if (isStartStringType && isEndStringType) return [startTime, endTime]

      const { hours: satrtH, minutes: startM } = startTime
      const { hours: endH, minutes: endM } = endTime

      return [`${satrtH}:${startM}`, `${endH}:${endM}`]
    }

    const [satrtH, startM] = startTime.split(':')
    const [endH, endM] = endTime.split(':')

    return [
      { hours: satrtH, minutes: startM },
      { hours: endH, minutes: endM }
    ]
  }

  if (isTime) {
    if (isStringType) {
      const [hours, minutes] = datetime.split(':')

      return { hours, minutes }
    }

    const { hours, minutes } = datetime

    return `${hours}:${minutes}`
  }

  if (isRange && isArrayType) {
    let [startDate, endDate] = datetime

    const isStringType = typeof startDate === 'string' && typeof endDate === 'string' && !isDateType

    if (isStringType) {
      startDate = new Date(startDate)
      endDate = new Date(endDate)
    }

    return [formatFns(startDate, formatStr), formatFns(endDate, formatStr)]
  }

  if (isStringType) return formatFns(new Date(datetime), formatStr)

  return formatFns(datetime, formatStr)
}
