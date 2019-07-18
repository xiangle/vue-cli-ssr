export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component() {
        return import(/* webpackChunkName: "home" */ './views/home/index.vue');
      }
    },
    {
      path: '/about',
      component() {
        return import(/* webpackChunkName: "about" */ './views/about.vue');
      }
    }
  ]
}