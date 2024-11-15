<script setup>
const props = defineProps({
  config: Object,
  isLoading: Boolean,
  spinner: Boolean
})

const slots = useSlots()

const bootstrap = inject('bootstrap')

const modal = ref(null)
const modalSticky = ref(false)
const ScrollRef = ref(null)
const scrollShadow = ref(false)

const formId = computed(() => props.config?.formId ?? 'create-edit-form')
const close = computed(() => {
  return {
    show: props.config?.showClose ?? true
  }
})

const isFooterSlotLength = computed(() => {
  const footerSlot = slots.footer

  if (footerSlot === undefined) return false

  return footerSlot().length > 0
})

const onYReachStart = () => {
  modalSticky.value = false
  scrollShadow.value = true
}
const onScrollDown = () => {
  modalSticky.value = true
  scrollShadow.value = false
}

const emit = defineEmits(['onShow', 'onShown', 'onHide', 'onHidden'])

defineExpose({ modal })

onMounted(() => {
  const options = {
    backdrop: props.config.backdrop ?? true,
    keyboard: false
  }

  modal.value = new bootstrap.Modal(`#${props.config.id}`, options)

  useEventListener(modal.value._element, 'show.bs.modal', $event => emit('onShow', $event))
  useEventListener(modal.value._element, 'shown.bs.modal', $event => emit('onShown', $event))
  useEventListener(modal.value._element, 'hide.bs.modal', $event => emit('onHide', $event))
  useEventListener(modal.value._element, 'hidden.bs.modal', $event => emit('onHidden', $event))
})
</script>

<template>
  <div :id="config.id" class="modal fade" :class="config.class" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" :class="config.dialogClass">
      <div class="modal-content">
        <div
          class="modal-header"
          :class="{
            shadow: modalSticky
          }"
        >
          <h4 class="modal-title">
            {{ config.title }} <small v-if="config.subtitle">{{ config.subtitle }}</small>
          </h4>

          <slot name="header" />

          <button
            v-if="close.show"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div class="modal-subheader">
          <slot name="subheader" />
        </div>

        <vscrollbar
          ref="ScrollRef"
          v-if="config.scrollbar"
          class="modal-body py-0"
          :class="config.bodyClass"
          @ps-y-reach-start="onYReachStart"
          @ps-scroll-down="onScrollDown"
        >
          <slot name="content" />
        </vscrollbar>

        <div v-else class="modal-body py-0" :class="config.bodyClass">
          <slot name="content" />
        </div>

        <div
          v-if="$slots.footer"
          :class="{ 'modal-footer': isFooterSlotLength, 'ps-shadow': scrollShadow }"
        >
          <slot name="footer" />
        </div>

        <div v-else class="modal-footer" :class="{ 'ps-shadow': scrollShadow }">
          <div class="mx-auto">
            <button
              type="submit"
              class="btn btn-primary btn-lg mx-1"
              :disabled="spinner"
              :form="formId"
            >
              <span
                v-show="spinner"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              {{ !spinner ? config.subtitle : $t('actions.savingText') }}
            </button>

            <button
              type="button"
              class="btn btn-outline-secondary btn-lg mx-1"
              data-bs-dismiss="modal"
              aria-label="Close"
              v-text="$tc('actions.closeText', 2)"
            />
          </div>
        </div>

        <Overlay v-show="isLoading" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ps-shadow {
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 1050;
}
</style>
