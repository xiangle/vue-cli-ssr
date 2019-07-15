import Vue from 'vue';
import Vuex from "vuex";
import Router from 'vue-router';
import vuexRouterSync from 'vuex-router-sync';

import App from './App.vue';
import storeConfig from './store/';
import routeConfig from './router.js';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);

/**
 * 创建Vue、Vuex、Router实例
 */
export default function () {

  const store = new Vuex.Store(storeConfig);
  const router = new Router(routeConfig);

  vuexRouterSync.sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store };

}