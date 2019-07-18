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
    },
    {
      path: '/news',
      component() {
        return import(/* webpackChunkName: "news" */ './views/news/list.vue');
      }
    },
    {
      path: '/news/details/*',
      component() {
        return import(/* webpackChunkName: "news_details" */ './views/news/details.vue');
      }
    }
  ]
}