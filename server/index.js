const Koa = require("koa");
const path = require("path");
const koaStatic = require("koa-static");

const app = new Koa();
const cwd = process.cwd();

app.use(koaStatic(path.resolve(cwd, 'dist')));

if (process.env.NODE_ENV === 'production') {
   const controller = require('./production.js');
   app.use(controller);
} else {
   const controller = require('./development.js');
   app.use(controller);
}

app.listen(3200);

console.log(`server http://localhost:3200`);