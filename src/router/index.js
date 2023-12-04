import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from "@/components/SearchPage"
import ProductDetails from "@/components/ProductDetails"
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
import HomePage from "@/components/HomePage"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/product',
    name:'product',
    component:ProductDetails
  },
  {
    path: '/login',
    name:'login',
    component:LoginPage
  },
  {
    path: '/register',
    name:'register',
    component:RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
