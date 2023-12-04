import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage"
import CartComponent from "@/components/CartComponent"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/cart',
    name:'cart',
    component:CartComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
