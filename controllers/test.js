module.exports = {
  'get /test': async (ctx, next) => {
    let query = JSON.parse(ctx.query.data);
    console.log('query.name', query.name);
    ctx.body = 'hello world !'
  }
};