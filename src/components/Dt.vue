<script setup>
const { width: clientWidth, height: clientHeight } = useWindowSize()

const xTable = ref(null)
</script>

<template>
  <vxe-table ref="xTable" :max-height="clientWidth > 768 ? clientHeight - 390 : null" auto-resize>
    <slot />

    <template #empty>
      <span>
        <p>沒有資料</p>
      </span>
    </template>
  </vxe-table>
</template>
