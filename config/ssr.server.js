const webpack = require('webpack');
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
   lintOnSave: false,
   assetsDir: "static",
   outputDir: 'server',
   chainWebpack(config) {
      
      config.plugins.delete('prefetch'); // 移除 prefetch 插件

   },
   configureWebpack(data) {

      const config = {
         devtool: false,
         target: 'node',
         entry: `./src/entry.server.js`,
         output: {
            libraryTarget: 'commonjs2'
         },
         // https://webpack.js.org/configuration/externals/#function
         // https://github.com/liady/webpack-node-externals
         // 外置化应用程序依赖模块，使服务器构建速度更快，并生成较小的bundle文件
         externals: nodeExternals({
            whitelist: /\.css$/
         }),
         plugins: [
            new webpack.DefinePlugin({
               'process.env.NODE_ENV': 'development',
               'process.env.VUE_ENV': 'server'
            }),
            // 创建供服务端渲染的打包文件，默认输出`vue-ssr-server-bundle.json`
            new VueSSRServerPlugin(),
         ]
      }

      // serverCompiler.watch({}, (err, stats) => {

      //    if (err) {
      //       throw err;
      //    }

      //    console.log(stats);

      // });

      return config;

   },
}