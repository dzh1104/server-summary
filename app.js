const Koa = require('koa');
const server = require('koa-static');

const app = new Koa();

const controller = require('./controller');

app.use(controller());

app.listen(3000, () => {
  console.log('Server is running at port 3000 ...');
});