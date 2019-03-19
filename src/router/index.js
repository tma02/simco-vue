import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Warehouse from '@/components/Warehouse';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/warehouse',
      name: 'Warehouse',
      component: Warehouse,
    },
  ],
});
