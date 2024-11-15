import { useRoute } from 'vue-router'
import i18n from '@/libs/i18n'

export function useI18n() {
  const route = useRoute()

  function $t(value, arg) {
    return i18n.global.t(value, arg)
  }

  function $tc(value, arg) {
    return i18n.global.tc(value, arg)
  }

  function $tv(value, arg) {
    const { name: routeName } = route

    return i18n.global.t(`views.${routeName}.${value}`, arg)
  }

  return { $t, $tv, $tc }
}
