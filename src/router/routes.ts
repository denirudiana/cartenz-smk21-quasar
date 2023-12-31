import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
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
        path: '/hotel',
        name: 'hotel',
        component: () => import('pages/Hotel.vue'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('pages/Help.vue'),
      },
      {
        path: '/profil',
        name: 'profil',
        component: () => import('pages/ProfilPage.vue'),
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
