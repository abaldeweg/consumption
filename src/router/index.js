import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActiveExact',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'list' },
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/list/:itemId',
      name: 'list.update',
      component: () => import('../views/UpdateView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'list' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
