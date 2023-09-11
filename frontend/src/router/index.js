import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/About',
    name: 'AboutPage',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/Contacts',
    name: 'ContactsPage',
    component: () => import('@/views/ContactPage.vue')
  },
  {
    path: '/PortsPage',
    name: 'PortsPage',
    component: () => import('@/views/PortsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
