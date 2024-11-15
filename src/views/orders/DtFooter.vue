<script setup>
import DtUtils from '@core/utils/dt'

const orderStore = useOrder()
const { pageChange, pageParams } = new DtUtils(orderStore)

pageParams()

const { table } = storeToRefs(orderStore)
</script>

<template>
  <vxe-pager
    v-model:current-page="table.params.p"
    v-model:page-size="table.params.length"
    :total="table.pager.totals"
    @page-change="pageChange"
  />
</template>
