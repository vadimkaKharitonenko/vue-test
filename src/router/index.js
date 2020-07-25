import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import CreateNote from '../views/CreateNote';
import EditNote from '../views/EditNote';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateNote',
    component: CreateNote
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
