import router from '@/router'
import { Menus } from './menu'

import i18n from '@/libs/i18n'

export const meta = {
  main() {
    return {
      titleTemplate: '%s - ' + '訂房管理系統',
      htmlAttrs: {
        lang: i18n.mode === 'legacy' ? i18n.global.locale : i18n.global.locale.value
      }
    }
  },
  dashboard() {
    return {
      title: '數據面板'
    }
  },
  orders() {
    return {
      title: '訂房管理'
    }
  }
}

export default () => {
  const routes = router.getRoutes()

  Menus.forEach(item => {
    item.isChildren = false

    routes.forEach(route => {
      const isMatch = item.name.includes(route.name)

      if (!isMatch) return

      if (Object.hasOwn(item, 'children')) {
        item.isChildren = true

        item.children.forEach(subItem => {
          routes.forEach(route => {
            const isMatch = subItem.name.includes(route.name)

            if (!isMatch) return

            subItem.path = route.path
          })
        })
      }

      item.path = route.path
    })
  })

  return Menus
}
