import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Registrieren.vue'
import HelloWorldVue from '@/components/startseite/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorldVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Anmelden.vue')
    }
  ]
})

export default router
