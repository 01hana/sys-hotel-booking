export const tFormToSet = (params, toUpdateData, formRefs) => {
  if (Array.isArray(params)) {
    params.forEach(param => {
      const isDataArray = Array.isArray(toUpdateData[param])

      if (
        toUpdateData[param] === null ||
        toUpdateData[param] === '' ||
        (isDataArray && toUpdateData[param].length === 0)
      )
        return

      if (isDataArray) {
        formRefs.setValues({ [param]: toUpdateData[param] })

        return
      }

      formRefs.setFieldValue(param, toUpdateData[param])
    })

    return
  }

  formRefs.setFieldValue(params, toUpdateData[params])
}
