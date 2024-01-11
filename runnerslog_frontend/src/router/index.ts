import { createRouter, createWebHistory } from 'vue-router'
import startseiteLauferVue from '@/views/startseite-laufer.vue'
import neuerLaufVue from '@/components/lauf/neuer-lauf.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/startseite-laufer',
      name: 'Startseite Laufer',
      component: startseiteLauferVue
    },
    {
      path: '/neuer-lauf',
      name: 'neuer lauf',
      component: neuerLaufVue
    }
  ]
})

export default router
