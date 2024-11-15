export const responseMessage = error => {
  let msg = error.response.statusText

  if (error.response.data !== null && error.response.data.messages !== null) {
    switch (typeof error.response.data.messages) {
      case 'object':
        msg = error.response.data.messages.error

        break
      case 'string':
        msg = error.response.data.message

        break
    }
  }

  return msg
}
