export default {
   methods: {
      $header(options) {
         Object.assign(this.$ssrContext, options);
      }
   }
}