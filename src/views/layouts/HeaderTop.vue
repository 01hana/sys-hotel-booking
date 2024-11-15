<script setup></script>

<template>
  <nav
    class="header-navbar navbar navbar-fixed align-items-center navbar-shadow d-flex floating-nav flex-nowrap"
  >
    <div class="navbar-header mx-3">
      <ul class="nav navbar-nav d-flex align-items-center">
        <li class="nav-item me-3 d-block d-xl-none">
          <button
            type="button"
            class="nav-link menu-toggle bi bi-list font-large-1"
            @click="$emit('menuToggle')"
          />
        </li>
      </ul>
    </div>

    <div class="navbar-container content">
      <ul class="nav navbar-nav flex-row ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-bell" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-person" />
            <div class="ms-2 d-sm-flex d-none"><span v-text="'系統管理員'" /></div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-link i {
  background-color: #eee;
  padding: 4px 6px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.nav-link i::before {
  margin: 0;
}
</style>
