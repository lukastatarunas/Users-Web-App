import Vue from 'vue'
import VueRouter from 'vue-router'

import Users from '../views/Users.vue'
import SingleUser from '../views/SingleUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/:id',
    name: 'SingleUser',
    component: SingleUser
  }
]

const router = new VueRouter({
  routes
})

export default router
