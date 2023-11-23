import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddExpense from '../views/AddExpense.vue'
import ManageExpense from '../views/ManageExpense.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add/expense',
    name: 'addexpense',
    component: AddExpense
  },
  {
    path: '/manage/expense',
    name: 'manageexpense',
    component: ManageExpense
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
