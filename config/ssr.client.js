module.exports = {
   lintOnSave: false,
   assetsDir: "static",
   configureWebpack() {

      return {
         entry: `./src/entry.client.js`,
         target: 'web',
      }

   },
}