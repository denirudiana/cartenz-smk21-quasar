
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dashboard.vue'),
        name: 'Dashboard'
      },
      {
        path: '/dashboard/hotels', component: () => import('src/pages/Hotels.vue'), name: 'Hotels'
      },
      {
        path: '/dashboard/regions', component: () => import('pages/Regions.vue'), name: 'Regions'
      },
      {
        path: '/dashboard/settings', component: () => import('pages/Settings.vue'), name: 'Settings'
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayoutLogin.vue'),
    children: [
      {
        path: '',
        component: () => import('layouts/Login.vue'),
        name: 'Login'
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
