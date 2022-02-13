export default [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'list' },
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView'),
  },
  {
    path: '/list/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView'),
    props: (route) => ({
      id: parseInt(route.params.id),
    }),
  },
  {
    path: '*',
    redirect: { name: 'list', params: { is404: true } },
  },
]
