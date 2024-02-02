import Vue from 'vue';
import VueRouter from 'vue-router';
import MemberListView from '../views/MemberListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'member-list',
    component: MemberListView,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
