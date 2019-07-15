const webpack = require('webpack');
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
   lintOnSave: false,
   assetsDir: "static",
   outputDir: 'server',
   configureWebpack(data) {

      const config = {
         // devtool: 'source-map',
         entry: `./src/entry.client.js`,
         output: {
            libraryTarget: 'commonjs2'
         },
         plugins: [
            new webpack.DefinePlugin({
               'process.env.NODE_ENV': 'development',
               'process.env.VUE_ENV': '"server"'
             }),
            // 创建供客户端状态激活的map文件，默认输出`vue-ssr-client-manifest.json`
            new VueSSRClientPlugin()
         ]
      }

      return config;

   },
}