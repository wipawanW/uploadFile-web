import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadViwe from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'upload',
      component: UploadViwe
    }, 
    {
      path: '/about',
      name: 'about', 
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
