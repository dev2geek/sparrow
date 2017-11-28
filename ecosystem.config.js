module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'biz-facade',
      script    : './packages/biz-facade/index.js',
      trace     : true

    },
    {
      name      : 'biz-4001',
      script    : './packages/biz-4001/index.js',
      trace     : true
    },
    {
      name      : 'biz-4002',
      script    : './packages/biz-4002/dist/index.js',
      trace     : true
    }
  ]
};
