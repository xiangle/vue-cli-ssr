export default {
   state() {
      return {
         a: 1,
         b: 2
      }
   },
   mutations: {
      assign(state, data) {
         Object.assign(state, data);
      }
   }
}