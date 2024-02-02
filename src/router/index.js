import Vue from 'vue';
import VueRouter from 'vue-router';
import MemberListView from '../views/MemberListView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'member-list',
    component: MemberListView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
