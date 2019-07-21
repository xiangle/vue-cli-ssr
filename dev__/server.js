const path = require('path')
const MFS = require('memory-fs')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require("@vue/cli-service/webpack.config");
const serverConfig = require("../config/ssr.server.js");

const cwd = process.cwd()
const mfs = new MFS()

const webpackConfig = merge(baseConfig, serverConfig.configureWebpack())
const compiler = webpack(webpackConfig);
compiler.outputFileSystem = mfs;

function readFile(fs, file) {
   try {
      return fs.readFileSync(path.join(cwd, 'dist', file), 'utf-8')
   } catch (e) { }
}

compiler.watch({}, (err, stats) => {

   if (err) throw err
   stats = stats.toJson()
   if (stats.errors.length) return

   const bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'));

   console.log('server-bundle');

   // update()

})