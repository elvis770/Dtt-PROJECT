import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/houses',
    name: 'houses',
    component: () => import ('@/views/HousesView.vue')
  },
  
  {
    path: '/listing',
    name: 'listing',
    component: () => import ('@/views/ListingView.vue')
  },
  
  {
  path: '/create',
  name: 'create',
  component: () => import ('@/views/CreateView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import ('@/views/AboutView.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import ('@/views/NewView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
