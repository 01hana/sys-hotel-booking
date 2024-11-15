<script setup>
import { Form } from 'vee-validate'

const props = defineProps({
  actions: Object
})

const searchForm = ref(null)

const create = computed(() => {
  return {
    show: props.actions?.create?.show ?? true,
    bsTarget: props.actions?.create?.bsTarget ?? '#create-edit-modal'
  }
})

const emit = defineEmits(['searchSubmit'])

const searchSubmit = data => emit('searchSubmit', data)

const dtReset = searchForm => emit('dtReset', searchForm)
</script>

<template>
  <div class="row justify-content-between flex-column flex-xl-row g-0 gap-2 w-100">
    <div v-if="create.show" class="col-auto heading-elements me-auto hstack">
      <div class="d-flex align-items-center flex-wrap gap-1">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-type="create"
          data-bs-toggle="modal"
          :data-bs-target="create.bsTarget"
          v-text="$t('actions.createText')"
        />

        <slot name="actions" />

        <div v-if="$slots.actions" class="vr mx-1 my-2 d-none d-sm-block" />
      </div>
    </div>

    <div v-if="$slots.search" class="col-12 col-md-auto ms-auto">
      <Form ref="searchForm" id="search-form" class="position-relative" @submit="searchSubmit">
        <div class="input-group">
          <slot name="search" />
          <button
            type="submit"
            class="input-group-text btn btn-light bi bi-search"
            form="search-form"
            v-tooltip.bottom="$t('actions.searchText')"
          />

          <button
            type="reset"
            class="input-group-text btn btn-light bi bi-arrow-clockwise"
            form="search-form"
            data-bs-toggle="tooltip"
            v-tooltip.bottom="$tc('actions.resetText', 0)"
            @click="dtReset(searchForm)"
          />
        </div>
      </Form>
    </div>
  </div>
</template>
