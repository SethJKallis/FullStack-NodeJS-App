import { createRouter, createWebHistory } from 'vue-router'

import Create from '../components/AddProduct.vue'
import Edit from '../components/EditProduct.vue'
import Index from '../components/ProductList.vue'

const routes = [
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/',
    name: 'index',
    component: Index
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
