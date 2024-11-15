<script setup>
import VxeUITable from 'vxe-table'

import { getLocalePackage } from '@/libs/dt/utils'

const { width: clientWidth, height: clientHeight } = useWindowSize()
const xTable = ref(null)

const setLocale = async locale => {
  const { default: message } = await getLocalePackage(locale)

  VxeUITable.setI18n(locale, message)
  VxeUITable.setLanguage(locale)
}

onMounted(() => {
  setLocale('zh-TW')
})
</script>

<template>
  <vxe-table ref="xTable" :max-height="clientWidth > 768 ? clientHeight - 325 : null" auto-resize>
    <slot />

    <template #empty>
      <span>
        <p v-text="$t('table.empty')" />
      </span>
    </template>
  </vxe-table>
</template>
