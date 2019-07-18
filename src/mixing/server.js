export default {
   methods: {
      $header(options) {
         Object.assign(this.$ssrContext, options);
      },
      $mixin(data) {
         for (const name in data) {
            this[name] = data[name];
         }
         this.$store.init_state = data;
      },
   }
}