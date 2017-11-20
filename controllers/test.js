module.exports = {
  'get /test': async (ctx, next) => {
    let query = ctx.query;
    console.log('query.name', query);
    ctx.body = {
      query
    };
  }
};
