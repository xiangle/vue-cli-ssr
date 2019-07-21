const fs = require("fs");
const path = require('path');
const serverRenderer = require("vue-server-renderer");
const config = require("./ssr.client.js");

const cwd = process.cwd();

function readFile(fs, file) {
   try {
      return fs.readFileSync(path.join(cwd, 'dist', file), 'utf-8')
   } catch (e) { }
}

const template = fs.readFileSync(path.resolve(cwd, 'server/index.html'), "utf-8");
let renderer, clientManifest;

// serverBundle

const serverBundle = require('../server/vue-ssr-server-bundle.json');

function getRenderer(update) {

   if (serverBundle && clientManifest) {

      if (renderer === undefined) {

         renderer = serverRenderer.createBundleRenderer(serverBundle, {
            template,
            clientManifest,
            shouldPreload() { },
            shouldPrefetch() { },
            runInNewContext: false
         })

      }

      return renderer;

   }

}

module.exports = {
   ...config,
   devServer: {
      after(app, server) {

         const { compiler } = server;

         const { outputFileSystem } = compiler;

         compiler.plugin('done', stats => {

            stats = stats.toJson();
            stats.errors.forEach(err => console.error(err));
            stats.warnings.forEach(err => console.warn(err));

            if (stats.errors.length) return;

            clientManifest = JSON.parse(readFile(outputFileSystem, 'vue-ssr-client-manifest.json'));

         })

         app.get('*', async function (req, res) {

            const renderer = getRenderer();

            await renderer.renderToString({
               url: req.originalUrl,
               title: "",
               description: "",
               keywords: "",
            }).then(html => {

               res.send(html);

            }).catch(error => {

               res.send(error)

            })

         })

      }
   }
};