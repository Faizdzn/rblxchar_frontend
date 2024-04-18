import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import ('@/views/character/mainPage.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import ('@/views/donatePage.vue')
    },
    // {
    //   path: '/character/:username',
    //   name: 'download',
    //   component: () => import ('@/views/character/downPage.vue')
    // },
  ]
})

export default router
