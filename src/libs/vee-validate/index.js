import cfg from '@appConfig'

import { defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import { validatorPassword, validatorIPv4, validatorDate } from './rules'

import i18n from '@/libs/i18n'

// Load validations rules
Object.keys(AllRules).forEach(rule => defineRule(rule, AllRules[rule]))

defineRule('password', value => validatorPassword(value))

defineRule('permit_empty_password', value => {
  if (!value) return true

  return validatorPassword(value)
})

defineRule('ip', value => validatorIPv4(value))

defineRule('date', value => validatorDate(value))

// Load validations messages
const messages = {}

for (const locale of cfg.SUPPORT_LOCALES) {
  const { default: message } = await import(`./locales/${locale}.json`)

  messages[locale] = message
}

const isLegacy = i18n.mode === 'legacy'
const opts = {
  generateMessage: localize(messages),
  validateOnInput: true,
  validateOnBlur: false
}

configure(opts)

setLocale(isLegacy ? i18n.global.locale : i18n.global.locale.value)
