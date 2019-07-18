const cwd = process.cwd();
const fs = require("fs");
const path = require("path");
const serverRenderer = require("vue-server-renderer");
const bundle = require('./vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const template = fs.readFileSync(path.resolve(cwd, 'server/index.html'), "utf-8");

const renderer = serverRenderer.createBundleRenderer(bundle, {
   template,
   clientManifest,
   shouldPreload() { },
   shouldPrefetch() { },
   runInNewContext: false
})

module.exports = async function (ctx, next) {

   await renderer.renderToString({
      url: ctx.url,
      title: "",
      description: "",
      keywords: "",
   }).then(html => {

      ctx.body = html;

   }).catch(error => {

      console.log(error);

      ctx.body = 'Page not found';

   })

}