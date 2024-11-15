import { createToastInterface, useToast } from 'vue-toastification'
import config, { alarmInitOption } from './config'

const toast = useToast()
const alarmToast = createToastInterface(alarmInitOption)

export { toast, alarmToast }

class Noti {
  constructor() {
    this.toast = toast
    this.alarmToast = alarmToast
  }

  success(message, param) {
    return this.toast(message, config['SUCCESS'](param))
  }

  error(message, param) {
    return this.toast(message, config['ERROR'](param))
  }

  info(message, param) {
    return this.toast(message, config['INFO'](param))
  }

  default(message) {
    return this.toast(message, config['DEFAULT']())
  }

  alarm(message, param) {
    return this.alarmToast(message, config['ALARM'](param))
  }
}

export default new Noti()
