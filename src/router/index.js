import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from "@/components/SearchPage"
import ProductDetails from "@/components/ProductDetails"
import LoginPage from "@/components/LoginPage"
const routes = [
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
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
