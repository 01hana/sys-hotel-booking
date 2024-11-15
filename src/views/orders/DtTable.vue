<script setup>
import DtUtils from '@core/utils/dt'

const orderStore = useOrder()

const { sortChange, filterChange, remove } = new DtUtils(orderStore)

const DtRef = ref(null)

const spinner = computed(() => orderStore.table.spinner)
const dtData = computed(() => orderStore.table.dtData)

onMounted(() => {
  orderStore.table.ref = DtRef.value.$refs.xTable
})
</script>

<template>
  <Dt
    ref="DtRef"
    :loading="spinner"
    :data="dtData"
    :checkbox-config="{ labelField: 'select' }"
    @header-cell-click="sortChange"
    @filter-change="filterChange"
  >
    <vxe-column min-width="200" width="200" field="action" title="操作">
      <template #default="{ row }">
        <div class="d-flex align-items-center flex-wrap gap-2">
          <button
            type="button"
            class="btn btn-outline-info bi bi-pencil-square"
            :data-id="row.id"
            data-type="edit"
            data-bs-toggle="modal"
            data-bs-target="#create-edit-modal"
            v-text="$t('actions.editText')"
          />

          <button
            type="button"
            class="btn btn-outline-danger bi bi-trash"
            @click="remove(row.id, row.number)"
            v-text="$t('actions.removeText')"
          />
        </div>
      </template>
    </vxe-column>

    <vxe-column min-width="200" width="200" field="number" align="center" title="訂單編號">
      <template #default="{ row }">
        <div
          v-if="row.number"
          class="badge bg-light text-secondary fw-medium"
          v-text="row.number"
        />
      </template>
    </vxe-column>

    <vxe-column min-width="230" field="buyer" title="訂購人資訊">
      <template #default="{ row }">
        <p class="bi bi-person">{{ row.buyer.name }}</p>
        <p class="bi bi-phone">{{ row.buyer.tel }}</p>
        <p class="bi bi-envelope">{{ row.buyer.email }}</p>
      </template>
    </vxe-column>

    <vxe-column min-width="180" field="duration" align="center" title="入住 / 退房日期">
      <template #default="{ row }">
        <p>{{ row.start_date }}</p>
        <p>{{ row.end_date }}</p>
      </template>
    </vxe-column>

    <vxe-column min-width="160" field="price" title="訂單金額">
      <template #default="{ row }">
        <span>$ {{ row.price }} </span>
        <span v-if="row.memo"> ({{ row.memo }})</span>
      </template>
    </vxe-column>
  </Dt>
</template>

<style scoped>
.badge {
  font-weight: normal;
}
p {
  margin-bottom: 0.5rem;
}
</style>
