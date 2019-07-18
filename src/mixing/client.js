export default {
   methods: {
      $header(options) {
         document.title = options.title;
      },
      $mixin(data) {
         for (const name in data) {
            this[name] = data[name];
         }
      },
   }
}