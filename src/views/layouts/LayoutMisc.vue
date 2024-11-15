<template>
  <router-view v-slot="{ Component }">
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      mode="out-in"
      leave-active-class="animate__animated animate__zoomOut animate__faster"
    >
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
