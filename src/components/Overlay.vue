<script setup>
defineProps({
  loadingText: String,
  textClass: String,
  spinnerClass: String
})
</script>

<template>
  <div class="overlay bg-light bg-opacity-75">
    <div class="spinner-border text-primary" :class="spinnerClass" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="loadingText" class="spinner-text" :class="textClass">
      {{ loadingText }}
    </div>
    <slot name="content" />
  </div>
</template>

<style scoped>
.overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  z-index: 1000;
}

.overlay .spinner-border {
  --bs-text-opacity: 1;
  opacity: 0.7;
}

.overlay .spinner-text {
  margin-top: 0.425rem;
  color: var(--bs-gray-600);
  font-size: 0.95rem;
}
</style>
