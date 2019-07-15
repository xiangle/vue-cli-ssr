import Vue from 'vue';
import Base from './base.js';

const { router, store, app } = Base();

router.onReady(() => {
   app.$mount('#app');
})

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
   store.replaceState(window.__INITIAL_STATE__)
}

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
   beforeRouteUpdate(to, from, next) {

      const { asyncData } = this.$options;

      if (asyncData) {
         asyncData({
            store: this.$store,
            route: to
         }).then(next).catch(next)
      } else {
         next();
      }

   }
})