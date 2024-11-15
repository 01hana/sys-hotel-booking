import cfg from '@appConfig'
import { TYPE, POSITION } from 'vue-toastification'

export const alarmInitOption = {
  type: TYPE.DEFAULT,
  position: POSITION.TOP_CENTER,
  pauseOnHover: false,
  hideProgressBar: false,
  draggable: false,
  timeout: false,
  closeButton: false,
  closeOnClick: false,
  icon: false,
  maxToasts: 1,
  newestOnTop: false,
  toastClassName: 'alert alert-alarm position-fixed',
  containerClassName: 'alert-alarm-container',
  bodyClassName: 'alert-body',
  transition: {
    enter: 'animate__animated animate__lightSpeedInRight animate__faster',
    leave: 'animate__animated animate__backOutUp animate__fast'
  }
}

export default {
  ALARM(param) {
    const option = {}

    if (param && param.id) {
      option.id = param.id
    }

    return option
  },

  DEFAULT() {
    return {
      type: TYPE.DEFAULT,
      timeout: cfg.sysSec,
      pauseOnHover: true,
      position: POSITION.TOP_RIGHT,
      hideProgressBar: false,
      closeButton: false,
      icon: 'bi-info-circle-fill',
      toastClassName: 'alert alert-info',
      bodyClassName: 'alert-body'
    }
  },

  SUCCESS(param) {
    const option = {
      type: TYPE.SUCCESS,
      timeout: cfg.alertSec,
      draggable: false,
      pauseOnHover: false,
      position: POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      closeButton: false,
      closeOnClick: false,
      icon: 'bi-check-circle-fill',
      toastClassName: 'alert alert-success shadow',
      bodyClassName: 'alert-body'
    }

    if (param && param.id) {
      option.id = param.id
    }

    return option
  },

  ERROR(param) {
    const option = {
      type: TYPE.ERROR,
      timeout: !(param && param.alwaysDisplay) ? cfg.errSec : false,
      draggable: false,
      pauseOnHover: true,
      position: POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      closeButton: false,
      closeOnClick: false,
      icon: 'bi-x-circle-fill',
      toastClassName: 'alert alert-danger shadow',
      bodyClassName: 'alert-body'
    }

    if (param && param.id) {
      option.id = param.id

      if (param.id === 'CODE-401') {
        option.maxToasts = 1
      }
    }

    if (param && param.isNode) {
      option.timeout = false
      option.hideProgressBar = true
      option.closeButton = 'button'
    }

    return option
  },

  INFO(param) {
    const option = {
      type: TYPE.INFO,
      timeout: cfg.sysSec,
      pauseOnHover: true,
      position: POSITION.TOP_RIGHT,
      hideProgressBar: false,
      closeButton: 'button',
      icon: 'bi-info-circle-fill',
      toastClassName: 'alert alert-info',
      bodyClassName: 'alert-body'
    }

    if (param && param.id) {
      option.id = param.id
    }

    return option
  }
}
