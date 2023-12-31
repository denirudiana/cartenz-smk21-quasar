import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegisterPage.vue')}],
  },
  {
    path: '/',
    name: 'login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue')}],
  },
  {
    path: '/profile',
    name: 'User Profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ProfilePage.vue')}]
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DataHotel.vue')}],
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Help.vue')}],
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue')}],
  },
  {
    path: '/tambahdaerah',
    name: 'Tambah Daerah',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegPage.vue')}]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;