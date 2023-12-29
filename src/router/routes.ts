import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: '/regform',
        name: 'regform',
        component: () => import('pages/Regform.vue'),
      },
      {
        path: '/auth',
        component: () => import('pages/Auth.vue'),
        meta: { requiresAuth: true },  // Menandakan bahwa rute ini memerlukan otentikasi
      },
    ],
  },
  {
    path: '/mainlayout',
    name: 'MainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: '/listhotel',
        name: 'hotel',
        component: () => import('pages/ListHotel.vue'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('pages/Help.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/ProfileInfo.vue'),
      },
      {
        path: '/daerah',
        name: 'daerah',
        component: () => import('pages/DaerahPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
