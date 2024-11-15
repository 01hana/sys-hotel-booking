export const validatorPositive = value => {
  if (value >= 0) {
    return true
  }
  return false
}

export const validatorPassword = value => {
  const regExp = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/

  return regExp.test(value)
}

export const validatorUrlValidator = val => {
  if (val === undefined || val === null || val.length === 0) {
    return true
  }

  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/

  return re.test(val)
}

export const validatorIPv4 = ip => {
  const regExp =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  return regExp.test(ip)
}

export const validatorDate = date => {
  const regExp = /^([12]\d{3}[\/\-](0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01]))$/

  return regExp.test(date)
}
