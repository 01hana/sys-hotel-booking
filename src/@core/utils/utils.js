import cfg from '@appConfig'

export const getLocale = () => localStorage.getItem('locale') ?? cfg.DEFAULT_LOCALE

export const getSessionStorage = name => sessionStorage.getItem(name)

export const setSessionStorage = (name, data) => {
  sessionStorage.setItem(name, typeof data === 'object' ? JSON.stringify(data) : data)
}

export const removeSessionStorage = name => sessionStorage.removeItem(name)

export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
