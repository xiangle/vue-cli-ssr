export default {
   methods: {
      $header(options) {
         if (this.$isServer) {
            Object.assign(this.$ssrContext, options);
         } else {
            document.title = options.title;
         }
      },
      $mixin(data) {
         for (const name in data) {
            this[name] = data[name];
         }
         if (this.$isServer) {
            this.$store.init_state = data;
         }
      },
   }
}