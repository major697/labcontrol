const project = 'LabControl'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    meta: {
      title: `${project} - Home`,
    },
  },
  {
    path: '/:query',
    name: 'result',
    component: () =>
      import(/* webpackChunkName: "ResultSearchView" */ '@/views/ResultSearchView.vue'),
    meta: {
      title: `${project} - Result search`,
    },
  },
]
