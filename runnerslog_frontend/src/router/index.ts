import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/registrieren.vue'
import HelloWorldVue from '@/components/startseite/hello-world.vue'
import startseiteVue from '@/startseite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: startseiteVue
    },
    {
      path: '/neuer-lauf',
      name: 'neuer lauf',
      component: () => import('@/views/Laufer/neuer-lauf.vue')
    }
  ]
})

export default router
