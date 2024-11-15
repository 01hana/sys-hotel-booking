import { createRouter, createWebHistory } from 'vue-router'

import pages from './routes/pages'
import others from './routes/others'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes: [...pages, ...others]
})

router.beforeEach(async to => {})

export default router
