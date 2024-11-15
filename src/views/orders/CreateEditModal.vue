<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

import { datasetTarget } from '@core/utils/modal'

const route = useRoute()

const [isLoading, setLoading] = useState(false)
const [spinner, setSpinner] = useState(false)

const navigation = inject('navigation')

const editForm = ref(null)
const createEditModal = ref(null)
const modalTitle = ref(navigation[route.name]().title)
const subTitle = ref('')

async function onShow(e) {
  const { modalSubtitle } = datasetTarget(e.relatedTarget.dataset)

  subTitle.value = modalSubtitle

  setLoading(true)
}

async function onShown(e) {
  const { id, isEdit } = datasetTarget(e.relatedTarget.dataset)

  setLoading(false)
}

function onHidden() {
  editForm.value.resetForm()
}

function onSubmit(data) {
  console.log(data)
}
</script>

<template>
  <Modal
    ref="createEditModal"
    :isLoading
    :spinner
    :config="{
      id: 'create-edit-modal',
      title: modalTitle,
      subtitle: subTitle,
      dialogClass: 'modal-dialog-scrollable'
    }"
    @onShow="onShow"
    @onShown="onShown"
    @onHidden="onHidden"
  >
    <template #content>
      <Form id="create-edit-form" ref="editForm" @submit="onSubmit">
        <Field type="hidden" name="id" />

        <div class="card card-form mb-0">
          <div class="card-body">
            <div class="mb-4">
              <label class="form-label">訂單編號</label>
              <Field
                type="text"
                name="number"
                label="訂單編號"
                class="form-control"
                :disabled="spinner"
              />
            </div>

            <div class="mb-4">
              <label class="form-label">訂購人姓名</label>
              <Field name="name" label="訂購人姓名" rules="required" v-slot="{ field, errors }">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': !!errors.length }"
                  :disabled="spinner"
                  v-bind="field"
                />
              </Field>
              <ErrorMessage name="name" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label class="form-label">訂購人電話</label>
              <Field
                name="tel"
                label="訂購人電話"
                rules="required|numeric"
                v-slot="{ field, errors }"
              >
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': !!errors.length }"
                  :disabled="spinner"
                  v-bind="field"
                />
              </Field>
              <ErrorMessage name="tel" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label class="form-label">訂購人Email</label>
              <Field
                name="email"
                label="訂購人Email"
                rules="required|email"
                v-slot="{ field, errors }"
              >
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': !!errors.length }"
                  :disabled="spinner"
                  v-bind="field"
                />
              </Field>
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <label class="form-label">訂單金額</label>
              <Field
                name="price"
                label="訂單金額"
                rules="required|numeric"
                v-slot="{ field, errors }"
              >
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': !!errors.length }"
                    :disabled="spinner"
                    v-bind="field"
                  />
                </div>
              </Field>
              <ErrorMessage name="price" class="invalid-feedback" />
            </div>

            <div class="mb-4">
              <Field
                type="checkbox"
                v-slot="{ field }"
                name="has_breakfast"
                :value="true"
                :unchecked-value="false"
              >
                <label>
                  <input
                    type="checkbox"
                    name="has_breakfast"
                    v-bind="field"
                    :value="true"
                    class="form-check-input me-2"
                  />
                  含早餐
                </label>
              </Field>
            </div>
          </div>
        </div>
      </Form>
    </template>
  </Modal>
</template>
