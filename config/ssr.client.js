const webpack = require('webpack');
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = {
   lintOnSave: false,
   assetsDir: "static",
   configureWebpack() {

      return {
         target: 'web',
         entry: `./src/entry.client.js`,
         plugins: [
            new webpack.DefinePlugin({
               'process.env.NODE_ENV': 'development',
               'process.env.VUE_ENV': 'client'
             }),
            // 创建供客户端状态激活的map文件，默认输出`vue-ssr-client-manifest.json`
            new VueSSRClientPlugin()
         ]
      }

   },
}