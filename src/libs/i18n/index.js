import { createI18n } from 'vue-i18n'

import { getLocale } from '@core/utils/utils'

const locale = getLocale()
let { default: message } = await import(`../../locales/${locale}/core.js`)

try {
  const { default: pluginMessage } = await import(`../../locales/${locale}/plugins.glob.js`)

  message = { ...message, ...pluginMessage }
} catch {
  console.warn(`Missing global language pack for ${message.locale} package`)
}

const messages = { [locale]: message }

export default new createI18n({
  locale,
  messages
})
