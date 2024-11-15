import Swal from 'sweetalert2'
import config from './config'

import { useI18n } from '@/composables/useI18n'

const { $t, $tc } = useI18n()

export const baseSwal = Swal

export default class {
  constructor(type) {
    this.type = type
  }

  Confirm() {
    return Swal.mixin(config['TYPE_CONFIRM_' + this.type])
  }

  Alert() {
    return Swal.mixin(config['TYPE_' + this.type])
  }

  showAlertDialog(params, preConfirm) {
    const SwalAlert = this.Alert()

    params.preConfirm = preConfirm

    return SwalAlert.fire(params)
  }

  showConfirmationDialog(params, preConfirm, willClose, onThen) {
    const Swal = this.Confirm()
    const isDel = this.type === 'DEL'

    params.title = params.title || (isDel ? $t('confirm.removeTitle') : '')
    params.confirmButtonText = params.confirmButtonText || (isDel ? $t('actions.removeText') : '')
    params.cancelButtonText = params.cancelButtonText || (isDel ? $tc('actions.closeText', 2) : '')
    params.preConfirm = preConfirm
    params.willClose = willClose

    Swal.fire(params).then(onThen)
  }
}
