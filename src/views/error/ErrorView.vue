<script setup>
import '@assets/css/pages/error.css'

import { useHead } from '@unhead/vue'

useHead({
  title: 'Oops! 找不到頁面'
})
</script>

<template>
  <div class="misc-wrapper">
    <div class="misc-inner p-4 p-sm-3">
      <div class="w-100 text-center">
        <h1 class="text-primary mb-4">Oops! You're lost.</h1>
        <p class="font-medium-2">查詢的頁面可能已經移除，重新命名或暫時無法使用。</p>
        <img
          src="@images/patterns/error.svg"
          class="slogan d-block img-fluid my-5 mx-auto"
          alt="Error"
        />
        <router-link to="/" class="btn btn-primary btn-lg mt-2">
          <i class="bi bi-chevron-left" />&nbsp; 返回</router-link
        >
      </div>
    </div>
  </div>
</template>
