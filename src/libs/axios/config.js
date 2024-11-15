import axios from 'axios'
import cfg from '@appConfig'

axios.defaults.baseURL = cfg.API_URL()
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

if (cfg.XSRF_COOKIE_NAME !== undefined) {
  axios.defaults.xsrfCookieName = cfg.XSRF_COOKIE_NAME
}
