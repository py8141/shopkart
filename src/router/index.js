import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from "@/components/SearchPage"
import ProductDetails from "@/components/ProductDetails"
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
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
