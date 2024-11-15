<script setup>
import { Field } from 'vee-validate'

import DtHeader from '@/components/DtHeader.vue'

import DtUtils from '@core/utils/dt'

const orderStore = useOrder()
const { searchSubmit, dtReset } = new DtUtils(orderStore)
</script>

<template>
  <DtHeader @searchSubmit="searchSubmit" @dtReset="dtReset">
    <template #search>
      <Field name="keyword" rules="required" v-slot="{ field, errors }">
        <input
          type="search"
          class="form-control"
          placeholder="搜尋..."
          :class="{ 'is-invalid': !!errors.length }"
          v-bind="field"
        />
      </Field>
    </template>
  </DtHeader>
</template>
