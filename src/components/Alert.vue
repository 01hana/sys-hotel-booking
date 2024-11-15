<script setup>
const props = defineProps({
  isClose: Boolean,
  hasIcon: Boolean,
  show: Boolean,
  title: String,
  type: String
})

const slots = useSlots()

const bootstrap = inject('bootstrap')

const classType = ref(props.type)
const isShow = ref(props.show)
const head = ref(props.title)
const alertMsg = ref('')
const delayProcess = ref(null)
const Alert = ref(null)

const set = (type, message, delay) => {
  isShow.value = true
  classType.value = type
  alertMsg.value = message

  if (delay) delayProcess.value = setTimeout(() => {}, delay)
}

const close = () => {
  clearTimeout(delayProcess.value)

  classType.value = ''
  alertMsg.value = ''
  head.value = ''
  isShow.value = false
}

onMounted(() => {
  Alert.value = new bootstrap.Alert('#alertToast')
})

defineExpose({ Alert, set, close })
</script>

<template>
  <Transition :duration="{ enter: 500, leave: 10 }">
    <div
      v-if="isShow"
      ref="Alert"
      id="alertToast"
      class="alert d-flex align-items-center"
      :class="[`alert-${classType}`]"
      role="alert"
    >
      <h4 v-if="head" class="alert-heading" v-text="head" />

      <div class="alert-body d-flex align-items-center">
        <i
          class="bi flex-shrink-0 me-3"
          :class="{
            'bi-x-circle-fill': classType === 'danger',
            'bi-check-circle-fill': classType === 'success',
            'bi-exclamation-triangle-fill': classType === 'warning',
            'bi-info-square-fill': classType === 'info'
          }"
        />
        <div v-if="alertMsg" v-text="alertMsg" />
        <slot v-if="slots.message" name="message" />

        <button
          v-if="isClose"
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
  </Transition>
</template>
