
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'Landing',
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        name: 'Main',
        path: 'home',
        component: () => import('pages/Main.vue')
      },
      {
        name: 'Calender',
        path: 'calendar',
        component: () => import('pages/CalendarPage.vue')
      },
      {
        name: 'Expenses',
        path: 'expenses',
        component: () => import('pages/ExpensesPage.vue')
      },
      {
        name: 'TimeManagement',
        path: 'timeManagement',
        component: () => import('pages/TimeManagementPage.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
