<script setup>
import DtHeader from './DtHeader.vue'
import DtTable from './DtTable.vue'
import DtFooter from './DtFooter.vue'
import CreateEditModal from './CreateEditModal.vue'
</script>

<template>
  <div class="content-body">
    <div class="card border-0 mb-0">
      <div class="card-header pb-3">
        <DtHeader />
      </div>

      <div class="card-body pb-0">
        <DtTable />
      </div>

      <div class="card-footer text-body-secondary py-3">
        <DtFooter />
      </div>
    </div>

    <Teleport to="#app">
      <CreateEditModal />
    </Teleport>
  </div>
</template>
