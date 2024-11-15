import { useI18n } from '@/composables/useI18n'

export const datasetTarget = data => {
  const { $t } = useI18n()
  const isCreate = data.type === 'create'
  const isEdit = data.type === 'edit'

  const id = data.id
  const name = data?.name

  let modalSubtitle = ''
  let actionType = ''

  if (isCreate) {
    modalSubtitle = $t('actions.createText')
    actionType = 'create'
  } else if (isEdit) {
    modalSubtitle = $t('actions.saveText')
    actionType = 'edit'
  }

  return { isCreate, isEdit, modalSubtitle, actionType, id, name }
}
