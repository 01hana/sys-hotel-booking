import DashboardView from '@/views/dashboard/DashboardView.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/orders/OrderView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]
