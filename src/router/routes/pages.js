export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/DashboardView.vue'),
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
