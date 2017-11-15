module.exports = {
  'get /test': async (ctx, next) => {
    ctx.body = 'hello world !'
  }
};