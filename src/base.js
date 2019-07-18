import Vue from 'vue';
import Vuex from "vuex";
import Router from 'vue-router';

import App from './App.vue';
import storeConfig from './store/';
import routeConfig from './router.js';
import header from "./components/header.vue";
import footer from "./components/footer.vue";

Vue.use(Vuex);
Vue.use(Router);

Vue.component('vue-header', header);
Vue.component('vue-footer', footer);

Vue.config.productionTip = false;

/**
 * 创建Vue、Vuex、Router实例
 */
export default function () {

  const store = new Vuex.Store(storeConfig);
  const router = new Router(routeConfig);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store };

}