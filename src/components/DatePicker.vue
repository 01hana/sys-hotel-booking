<script setup>
import '@vuepic/vue-datepicker/dist/main.css'

import VueDatePicker from '@vuepic/vue-datepicker'
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, subDays } from 'date-fns'

import { getFormatLocalePackage, format, formatFns } from '@/libs/vdatepicker/utils'
import i18n from '@/libs/i18n'

/**
 * Props
 *
 * @param isRange => v-model: [startDate, endDate]
 */

const props = defineProps({
  modelValue: [String, Number, Array],
  isDateTime: Boolean,
  isTime: Boolean,
  isRange: Boolean,
  isDefaultValue: Boolean,
  placeholder: String
})

const dateNow = ref()
const datePickerFormat = ref(null)
const formatLocale = ref(null)

const autoApply = computed(() => !props.isRange && !props.isDateTime && !props.isTime)

const actionConfig = computed(() => {
  const action = props.isRange || props.isDateTime || props.isTime

  return action
    ? { showNow: !props.isTime && !props.isRange, showSelect: true, showPreview: false }
    : {}
})

const textInputConfig = computed(() => {
  const action = props.isDateTime || props.isTime

  return action
    ? { enterSubmit: false, tabSubmit: true, openMenu: true, rangeSeparator: '-' }
    : undefined
})

const formatFnsOption = computed(() => {
  return { isDateTime: props.isDateTime, isTime: props.isTime, isRange: props.isRange }
})

const presetDates = computed(() => {
  return !props.isRange || (props.isRange && props.isTime)
    ? []
    : [
        { label: i18n.global.t('vDatePicker.today'), value: [new Date(), new Date()] },
        {
          label: i18n.global.t('vDatePicker.yesterday'),
          value: [subDays(new Date(), 1), new Date()]
        },
        {
          label: i18n.global.t('vDatePicker.lastWeek'),
          value: [subDays(new Date(), 6), new Date()]
        },
        {
          label: i18n.global.t('vDatePicker.lastThirtyDays'),
          value: [subDays(new Date(), 29), new Date()]
        },
        {
          label: i18n.global.t('vDatePicker.halfYear'),
          value: [subMonths(new Date(), 5), new Date()]
        },
        {
          label: i18n.global.t('vDatePicker.lastMonth'),
          value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))]
        },
        {
          label: i18n.global.t('vDatePicker.thisMonth'),
          value: [startOfMonth(new Date()), endOfMonth(new Date())]
        },
        {
          label: i18n.global.t('vDatePicker.thisYear'),
          value: [startOfYear(new Date()), endOfYear(new Date())]
        }
      ]
})

const emits = defineEmits(['change'])

const setFormatLocale = async (locale, isSet) => {
  formatLocale.value = await getFormatLocalePackage(locale || i18n.global.locale)
  datePickerFormat.value = await format(formatFnsOption.value, locale)

  if (isSet) {
    const isSetField = true

    emits(
      'change',
      await formatFns({ datetime: dateNow.value, ...formatFnsOption.value }, isSetField)
    )
  }
}

const handleChange = async datetime => {
  const isSetField = true

  emits('change', await formatFns({ datetime, ...formatFnsOption.value }, isSetField))
}

onBeforeMount(async () => {
  await setFormatLocale()

  if (!props.modelValue && props.isDefaultValue) {
    const datetime = props.isRange ? [subDays(new Date(), 1), new Date()] : new Date()

    dateNow.value = await formatFns({ datetime, ...formatFnsOption.value })
  }

  if (props.modelValue) {
    dateNow.value = await formatFns({ datetime: props.modelValue, ...formatFnsOption.value })
  }
})

watch(
  () => props.modelValue,
  async value => {
    dateNow.value = await formatFns({ datetime: value, ...formatFnsOption.value })
  }
)
</script>

<template>
  <VueDatePicker
    v-model="dateNow"
    input-class-name="form-control"
    week-start="0"
    :action-row="actionConfig"
    :auto-apply="autoApply"
    :enable-time-picker="isDateTime || isTime"
    :range="isRange ? { disableTimeRangeValidation: isTime && isRange } : false"
    :preset-dates="presetDates"
    :time-picker="isTime"
    :time-picker-inline="isDateTime"
    :multi-calendars="isRange"
    :text-input="textInputConfig"
    :format-locale="formatLocale"
    :format="datePickerFormat"
    :model-type="datePickerFormat"
    month-name-format="short"
    year-first
    :select-text="$t('vDatePicker.selectText')"
    :cancel-text="$t('vDatePicker.cancelText')"
    :now-button-label="$t('vDatePicker.nowButtonText')"
    :config="{ modeHeight: 160 }"
    :placeholder="placeholder"
    @update:model-value="handleChange"
  >
    <template #input-icon v-if="isTime">
      <i class="bi bi-clock input-slot-image" />
    </template>
    <template #clock-icon>
      <i class="bi bi-clock" />
    </template>
    <template #arrow-left>
      <i class="bi bi-chevron-left" />
    </template>
    <template #arrow-right>
      <i class="bi bi-chevron-right" />
    </template>
  </VueDatePicker>
</template>

<style scoped>
:deep(.dp__theme_light) {
  --dp-primary-color: var(--bs-primary);
  --dp-text-color: var(--bs-body-color);
  --dp-font-family: var(--bs-font-sans-serif-secondary);
  --dp-font-size: 1rem;
}
:deep(.dp__menu) {
  --dp-menu-border-color: var(--bs-gray-200);
  box-shadow: var(--bs-box-shadow-sm);
}
:deep(.dp__calendar_header) {
  --dp-text-color: var(--bs-gray-600);
  letter-spacing: 0.5px;
}
:deep(.dp__calendar_header_separator) {
  display: none;
}
:deep(.dp__month_year_select) {
  font-size: 1.05rem;
}
:deep(.dp--preset-range) {
  color: var(--bs-link-color);
}
:deep(.dp__action_button) {
  --dp-action-buttons-padding: 0.875rem 0.75rem;
  --dp-preview-font-size: 1.05rem;
  line-height: var(--bs-btn-line-height);
  font-family: var(--bs-btn-font-family);
  width: 65px;
  display: flex;
  justify-content: center;
}
:deep(.dp__action_select) {
  background: var(--bs-primary);
}
:deep(.dp__calendar_item) {
  font-size: 0.965rem;
}
:deep(.input-slot-image) {
  width: auto;
  margin-left: 12px;
}
:deep(.dp__time_picker_inline_container) {
  margin-bottom: 1rem;
}
:deep(.dp__button.dp__overlay_action) {
  margin-bottom: -10px;
  color: var(--bs-link-color);
}
:deep(.dp__input) {
  --dp-input-padding: 0.541rem 1rem;
}
</style>
