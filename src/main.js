import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { meta } from './navigation'
import i18n from './libs/i18n'

// 3rd party plugins
import './libs/axios'
import '@validations'
import VxeUITable from './libs/dt'
import VxeUI from 'vxe-pc-ui'
import { createHead } from '@unhead/vue'
import * as bootstrap from 'bootstrap'
import Toast from 'vue-toastification'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import { vTooltip } from 'floating-vue'

//** Styles
// vendor
// import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// plugins
import 'vue-toastification/dist/index.css'
import 'vue3-perfect-scrollbar/style.css'
import 'vxe-table/lib/style.css'
import 'vxe-pc-ui/lib/style.css'
import 'floating-vue/dist/style.css'

// main
import './assets/css/vendors/bootstrap-extended.css'
import './assets/css/core/colors/colors.css'
import './assets/css/components.css'
import './assets/css/horizontal-menu.css'
import './assets/css/plugins/datatables.css'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(head)
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VxeUITable)
app.use(VxeUI)
app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 5,
  newestOnTop: false
})

app.use(PerfectScrollbarPlugin, {
  componentName: 'vscrollbar'
})

app.directive('tooltip', vTooltip)

app.provide('bootstrap', bootstrap)
app.provide('navigation', meta)

const filterStr = ['$createElement']

app.config.warnHandler = function (msg) {
  if (msg.includes(filterStr)) return
}

app.mount('#app')
