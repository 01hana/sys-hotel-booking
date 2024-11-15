<script setup>
import HeaderTop from './HeaderTop.vue'
import HotizontalMenu from './HotizontalMenu.vue'

const { width } = useWindowSize()

const menuOpen = ref(false)

function menuToggle() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div
    class="horizontal-layout horizontal-menu navbar-floating navbar-static h-100"
    :class="{
      'menu-show': menuOpen
    }"
  >
    <header>
      <HeaderTop @menuToggle="menuToggle" />
      <HotizontalMenu @menuToggle="menuToggle" />
    </header>

    <main class="app-content content">
      <div
        class="content-wrapper pt-4"
        :class="{
          custom: width >= 1200
        }"
      >
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </main>

    <div
      class="sidenav-overlay"
      style="
        touch-action: pan-y;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      "
      @click="menuToggle"
    />
  </div>
</template>

<style scoped>
.custom {
  margin-left: 250px;
}
</style>
