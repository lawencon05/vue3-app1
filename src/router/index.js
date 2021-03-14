import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UserRoutes from '../components/user/router';
import RoleRoutes from '../components/role/router';
import NotFound from '../views/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  ...UserRoutes,
  ...RoleRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
