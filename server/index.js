const Koa = require("koa");
const path = require("path");
const koaStatic = require("koa-static");
const controller = require('./controller.js');

const app = new Koa();
const cwd = process.cwd();

app.use(koaStatic(path.resolve(cwd, 'dist')));

app.use(controller);

app.listen(3200);

console.log(`server http://localhost:3200`);