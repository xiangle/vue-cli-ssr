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

      // 等到 router 将可能的异步组件和钩子函数解析完
      router.onReady(() => {

         const matchedComponents = router.getMatchedComponents();

         if (matchedComponents.length === 0) {
            return reject({
               code: 404,
               error: `“${url}”路径不存在`
            });
         }

         context.store = store;
         context.route = router.currentRoute;

         // const list = [];

         // for (const item of matchedComponents) {

         //    const { asyncData, header, data } = item;

         //    if (asyncData) {
         //       const promise = asyncData(context);
         //       list.push(promise);
         //    }

         //    if (header) header(context);

         //    if (data) {

         //    } else {

         //    }

         // }

         // Promise.all(list).then(function () {

         //    context.state = store.state;

         //    resolve(app); // Promise返回值必须为app

         // }).catch(reject);

         resolve(app);

      }, reject);

   })

}