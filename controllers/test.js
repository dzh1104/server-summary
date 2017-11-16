module.exports = {
  'get /test': async (ctx, next) => {
    let query = ctx.query.data;
    console.log('query.name', query);
    ctx.body = {
      query
    };
  }
};