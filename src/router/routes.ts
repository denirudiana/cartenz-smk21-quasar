import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
      {
        path: '/district',
        name: 'district',
        component: () => import('pages/District.vue'),
      },
      {
        path: '/jakarta',
        name: 'jakarta',
        component: () => import('pages/Jakarta/Jakarta.vue'),
      },
      {
        path: '/jakarta1',
        name: 'jakarta1',
        component: () => import('pages/Jakarta/Jakarta1.vue'),
      },
      {
        path: '/jakarta2',
        name: 'jakarta2',
        component: () => import('pages/Jakarta/Jakarta2.vue'),
      },
      {
        path: '/jakarta3',
        name: 'jakarta3',
        component: () => import('pages/Jakarta/Jakarta3.vue'),
      },
      {
        path: '/bandung',
        name: 'bandung',
        component: () => import('pages/Bandung/Bandung.vue'),
      },
      {
        path: '/bandung1',
        name: 'bandung1',
        component: () => import('pages/Bandung/Bandung1.vue'),
      },
      {
        path: '/bandung2',
        name: 'bandung2',
        component: () => import('pages/Bandung/Bandung2.vue'),
      },
      {
        path: '/bandung3',
        name: 'bandung3',
        component: () => import('pages/Bandung/Bandung3.vue'),
      },
      {
        path: '/bogor',
        name: 'bogor',
        component: () => import('pages/Bogor/Bogor.vue'),
      },
      {
        path: '/bogor1',
        name: 'bogor1',
        component: () => import('pages/Bogor/Bogor1.vue'),
      },
      {
        path: '/bogor2',
        name: 'bogor2',
        component: () => import('pages/Bogor/Bogor2.vue'),
      },
      {
        path: '/bogor3',
        name: 'bogor3',
        component: () => import('pages/Bogor/Bogor3.vue'),
      },
      {
        path: '/bali',
        name: 'bali',
        component: () => import('pages/Bali/Bali.vue'),
      },
      {
        path: '/bali1',
        name: 'bali1',
        component: () => import('pages/Bali/Bali1.vue'),
      },
      {
        path: '/bali2',
        name: 'bali2',
        component: () => import('pages/Bali/Bali2.vue'),
      },
      {
        path: '/bali3',
        name: 'bali3',
        component: () => import('pages/Bali/Bali3.vue'),
      },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/AdminPage.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('pages/Help.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/users/Login.vue') },
      {
        path: '/register',
        component: () => import('pages/users/Register.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
