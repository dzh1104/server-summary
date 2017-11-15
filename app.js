const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

const controller = require('./controller');

app.use(serve(path.resolve(__dirname, '../client-summary/dist')));

app.use(controller());

app.listen(3000, () => {
  console.log('Server is running at port 3000 ...');
});