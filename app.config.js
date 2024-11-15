let API_URL = import.meta.env.VITE_API_URL + '/api/v1/'

if (import.meta.env.MODE === 'development') {
  API_URL = `https://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/v1/`
}

export default {
  API_URL(uri) {
    return uri ? API_URL + uri : API_URL
  },
  SITE_NAME: import.meta.env.VITE_SITENAME,
  TOKEN: import.meta.env.VITE_TOKEN,
  SOCKET_URL: import.meta.env.VITE_SOCKET_URL,
  DEFAULT_LOCALE: import.meta.env.VITE_DEFAULT_LOCALE,
  SUPPORT_LOCALES: import.meta.env.VITE_SUPPORT_LOCALES.split(',').sort(),
  COPYRIGHT: import.meta.env.VITE_COPYRIGHT,
  STORAGE_COOKIE_KEY: import.meta.env.VITE_LOCAL_STORAGE_COOKIE_KEY,
  XSRF_COOKIE_NAME: import.meta.env.VITE_XSRF_COOKIE_NAME,
  IS_DEV_MODE: import.meta.env.MODE === 'development',
  IS_STAGING_MODE: import.meta.env.MODE === 'staging',
  ALERT_SEC: parseInt(import.meta.env.VITE_ALERT_TIMEOUT),
  WARN_SEC: parseInt(import.meta.env.VITE_WARN_TIMEOUT),
  ERR_SEC: parseInt(import.meta.env.VITE_ERROR_TIMEOUT),
  SYS_SEC: parseInt(import.meta.env.VITE_SYS_TIMEOUT)
}
