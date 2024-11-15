<script setup>
import Menus from '@/navigation'

const route = useRoute()
const { width: clientWidth } = useWindowSize()

const menuItems = ref(Menus())

const primaryRouteName = computed(() => route.matched[0].name)
const secondaryRouteName = computed(() => route.matched[1]?.name)

const routeMatched = item => {
  return item?.compound
    ? item.compound.includes(primaryRouteName.value)
    : item.name.includes(primaryRouteName.value)
}
</script>

<template>
  <div class="horizontal-menu-wrapper vertical-overlay-menu">
    <div class="main-menu menu-light menu-fixed menu-shadow">
      <div
        class="navbar-header d-flex flex-column align-items-center justify-content-center py-0 py-xl-3"
      >
        <a
          v-if="clientWidth <= 1200"
          class="nav-link nav-toggle bi bi-x font-large-1 text-end w-100"
          @click="$emit('menuToggle')"
        />

        <router-link to="/" class="navbar-brand fs-5 fw-bolder">Hotel booking system </router-link>
      </div>

      <div class="navbar-container main-menu-content mt-3">
        <ul class="nav navbar-nav navigation navigation-main">
          <template v-for="item in menuItems">
            <li
              :class="{
                'has-sub': item.isChildren,
                active: routeMatched(item)
              }"
            >
              <router-link
                v-if="!item.isChildren"
                :to="item.path"
                @click="clientWidth <= 1200 ? $emit('menuToggle') : ''"
              >
                <i :class="item.icon" />
                <span>{{ item.title }}</span>
              </router-link>

              <router-link
                v-else
                :to="`#${item.name}`"
                class="d-flex align-items-center btn-toggle"
                :class="{ collapsed: routeMatched(item) }"
                data-bs-toggle="collapse"
                role="button"
              >
                <i :class="item.icon" />
                <span>{{ item.title }}</span>
              </router-link>
              <ul
                v-if="item.isChildren"
                class="collapse mt-2"
                :class="{ show: routeMatched(item) }"
                :id="item.name"
              >
                <template v-for="childrenItem in item.children">
                  <li>
                    <router-link
                      :to="childrenItem.path"
                      class="dropdown-item d-flex align-items-center"
                      :class="{ active: childrenItem.name.includes(secondaryRouteName) }"
                      @click="clientWidth <= 1200 ? $emit('menuToggle') : ''"
                    >
                      <span>{{ childrenItem.title }}</span>
                    </router-link>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link.nav-toggle {
  cursor: pointer;
  padding: 0;
  margin-top: 1rem;
}
</style>
