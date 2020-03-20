import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/VoucherSignup.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/company/:id',
    name: 'company',
    component: () => import(/* webpackChunkName: "about" */ '../views/Company.vue')
  },
  {
    path: '*',
    redirect: () => '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
