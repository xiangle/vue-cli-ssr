const cwd = process.cwd();
const fs = require("fs");
const path = require("path");
const serverRenderer = require("vue-server-renderer");
const bundle = require('../vue-ssr-server-bundle.json');
const clientManifest = require('../../dist/vue-ssr-client-manifest.json');

const template = fs.readFileSync(path.resolve(cwd, 'server/template/index.html'), "utf-8");

const renderer = serverRenderer.createBundleRenderer(bundle, {
   template,
   clientManifest,
   runInNewContext: false
}) 

module.exports = async function (ctx, next) {

   await renderer.renderToString({
      url: ctx.url,
      title: "vue cli ssr",
      description: "description description",
      keywords: "keywords keywords",
   }).then(html => {

      ctx.body = html;

   }).catch(err => {

      console.log(err);

      ctx.body = 'Page not found';

   })

}