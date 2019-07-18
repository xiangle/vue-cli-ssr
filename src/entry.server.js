import Base from './base.js';

export default context => {

   // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
   // 以便服务器能够等待所有的内容在渲染前，就已经准备就绪。
   return new Promise((resolve, reject) => {

      const instance = Base();

      const { router, store, app } = instance;

      const { url } = context;

      // 设置服务器端 router 的位置
      router.push(url);

      // 等待router将可能的异步组件和钩子函数解析完
      router.onReady(() => {

         // const matchedComponents = router.getMatchedComponents();

         // if (matchedComponents.length === 0) {
         //    return reject({
         //       code: 404,
         //       error: `“${url}”路径不存在`
         //    });
         // }

         // for (const item of matchedComponents) {

         //    const { header } = item;

         //    const extend = {};

         //    if (header) {
         //       extend.created = function () {
         //          const ssrHeader = header.call(this);
         //          Object.assign(this.$ssrContext, ssrHeader)
         //       }
         //    }

         //    item._Ctor = Vue.extend(item);

         // }

         // This `rendered` hook is called when the app has finished rendering
         context.rendered = () => {

            // After the app is rendered, our store is now
            // filled with the state from our components.
            // When we attach the state to the context, and the `template` option
            // is used for the renderer, the state will automatically be
            // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
            context.state = store.init_state;

         }

         resolve(app); // Promise返回值必须为app

      }, reject);

   })

}