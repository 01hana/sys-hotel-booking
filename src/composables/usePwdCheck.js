import { ref } from 'vue'

export function usePwdCheck() {
  const isPwdString = ref(false)
  const isPwdLength = ref(false)
  const isPwdNumber = ref(false)
  const isPwdSymbol = ref(false)

  const pwdCheck = form => {
    const { password } = form.getValues()

    isPwdString.value = /^(?=.*[A-Za-z])/.test(password)
    isPwdLength.value = /.{8,}/.test(password)
    isPwdNumber.value = /^(?=.*\d)/.test(password)
    isPwdSymbol.value = /^(?=.*[!@#$%&*()])/.test(password)
  }

  return {
    isPwdString,
    isPwdLength,
    isPwdNumber,
    isPwdSymbol,

    pwdCheck
  }
}
