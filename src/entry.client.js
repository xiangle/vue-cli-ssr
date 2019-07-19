import Vue from 'vue';
import Base from './base.js';
import client from './mixing/client.js';

const { router, store, app } = Base();

Vue.mixin(client);

router.onReady(() => {

  const matchedComponents = router.getMatchedComponents();

  const { __INITIAL_STATE__ } = window;

  for (const item of matchedComponents) {

    // 为mounted加锁，首次调用时不执行，防止重复操作
    const { mounted } = item;
    if (mounted) {
      item.mounted = function () {

        for (const name in __INITIAL_STATE__) {
          this[name] = __INITIAL_STATE__[name];
        }
        if (mounted.state === undefined) {
          mounted.state = true;
        } else {
          mounted.call(this);
        }

      }
    } else {

      item.mounted = function () {

        for (const name in __INITIAL_STATE__) {
          this[name] = __INITIAL_STATE__[name];
        }

      }

    }

    item._Ctor = Vue.extend(item);

  }

  // actually mount to DOM
  app.$mount('#app')

})