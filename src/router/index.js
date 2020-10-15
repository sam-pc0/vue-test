import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('../App.vue'),
  },

  {
    path: '/app/welcome',
    name: 'welcome',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/app/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/app/newuser',
    name: 'newuser',
    component: () => import('../views/NewUser.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
