const path = require('path')
const MFS = require('memory-fs')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require("@vue/cli-service/webpack.config");
const clientConfig = require("../config/ssr.client.js");

const cwd = process.cwd()
const mfs = new MFS();

const webpackConfig = merge(baseConfig, clientConfig.configureWebpack())
const compiler = webpack(webpackConfig);
compiler.outputFileSystem = mfs;

const readFile = (fs, file) => {
   try {
      return fs.readFileSync(path.join(cwd, 'dist', file), 'utf-8')
   } catch (e) { }
}

compiler.watch({}, (err, stats) => {

   if (err) throw err
   stats = stats.toJson()
   if (stats.errors.length) return

   const manifest = JSON.parse(readFile(mfs, 'vue-ssr-client-manifest.json'));

   console.log('client-manifest');

   // update()

})