export default {
   state() {
      return {}
   },
   mutations: {
      assign(state, data) {
         Object.assign(state, data);
      }
   }
}