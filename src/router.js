import Vue from 'vue'
import VueRouter from 'vue-router'
import Application from './view/Application/Main.vue';
import Plan from './view/Plan/Main.vue';
import User from './view/User/Main.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'Application'
  },
  {
    path: '/Application',
    component:Application
  },
  {
    path: '/Plan',
    component:Plan
  },
  {
    path: '/User',
    component:User
  },
]

const router = new VueRouter({
  routes
});

export default router