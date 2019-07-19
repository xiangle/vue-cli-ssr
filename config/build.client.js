const webpack = require('webpack');
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const manifest = require("../public/manifest.json");

module.exports = {
   lintOnSave: false,
   assetsDir: "static",
   configureWebpack(config) {

      return {
         devtool: false, // 调试map
         performance: {
            hints: false
         },
         optimization: {
            minimize: true
         },
         entry: `./src/entry.client.js`,
         plugins: [
            new webpack.DefinePlugin({
               'process.env.NODE_ENV': 'development',
               'process.env.VUE_ENV': 'client'
            }),
            new VueSSRClientPlugin(), // 生成供客户端激活的map文件
            new webpack.DllReferencePlugin({ manifest }),
         ]
      }

   },
   chainWebpack(config) {

      config.plugins.delete('prefetch'); // 移除 prefetch 插件
      config.plugins.delete('html');
      config.plugins.delete('preload');

   },
}