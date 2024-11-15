<script setup>
import { useHead } from '@unhead/vue'

const route = useRoute()
const navigation = inject('navigation')

useHead({
  titleTemplate: navigation.main().titleTemplate
})

const LayoutMisc = defineAsyncComponent({
  loader: () => import('./views/layouts/LayoutMisc.vue'),
  delay: 0
})

const LayoutHorizontal = defineAsyncComponent({
  loader: () => import('./views/layouts/LayoutHorizontal.vue'),
  delay: 0
})

const layout = computed(() => {
  if (route.name === undefined) return ''

  if (route.meta.layout === 'misc') return LayoutMisc

  return LayoutHorizontal
})
</script>

<template>
  <component :is="layout" />

  <div />
</template>
