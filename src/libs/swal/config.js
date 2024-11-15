import Swal from 'sweetalert2'

export default {
  TYPE_ALERT: {
    showClass: {
      popup: 'animate__animated animate__zoomIn animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut animate__faster'
    },
    customClass: {
      title: 'text-primary',
      confirmButton: 'btn btn-primary btn-lg'
    },
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
    buttonsStyling: false,
    focusConfirm: false
  },

  TYPE_CONFIRM_DEL: {
    iconHtml: '<i class="bi bi-trash text-danger"></i>',
    showClass: {
      popup: 'animate__animated animate__fadeInUp animate__fast',
      icon: 'swal2-warning swal2-icon-show'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut animate__faster'
    },
    customClass: {
      icon: 'border-0',
      title: 'text-danger',
      footer: 'text-center',
      confirmButton: 'btn btn-danger btn-lg',
      cancelButton: 'btn btn-light btn-lg'
    },
    allowEnterKey: true,
    showCancelButton: true,
    showCloseButton: true,
    buttonsStyling: false,
    focusConfirm: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading()
  },

  TYPE_CONFIRM_EXPORT: {
    iconHtml: '<i class="bi bi-download text-info"></i>',
    showClass: {
      popup: 'animate__animated animate__fadeInUp animate__faster',
      icon: 'swal2-warning swal2-icon-show'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut animate__faster'
    },
    customClass: {
      title: 'text-info',
      icon: 'border-0',
      confirmButton: 'btn btn-info btn-lg',
      cancelButton: 'btn btn-light btn-lg'
    },
    allowEnterKey: true,
    showCancelButton: true,
    showCloseButton: true,
    buttonsStyling: false,
    focusConfirm: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading()
  }
}
