import VxeUITable from 'vxe-table'

import { tableConfig, iconConfig } from './config'
import { getLocalePackage } from './utils'

import { getLocale } from '@core/utils/utils'

const locale = getLocale()

const { default: message } = await getLocalePackage(locale)

VxeUITable.setConfig(tableConfig)
VxeUITable.setIcon(iconConfig)
VxeUITable.setI18n(locale, message)
VxeUITable.setLanguage(locale)

export default VxeUITable
