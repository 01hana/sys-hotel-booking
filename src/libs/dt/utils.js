export const getLocalePackage = async value => {
  const { getLocale } = await import('@core/utils/utils')

  const locale = value || getLocale()

  const packageConfigurations = {
    en: () => import('vxe-table/lib/locale/lang/en-US'),
    'zh-TW': () => import('vxe-table/lib/locale/lang/zh-TW')
  }

  const isPackageExist = packageConfigurations.hasOwnProperty(locale)

  if (isPackageExist) return packageConfigurations[locale]()

  return packageConfigurations['zh-TW']()
}
