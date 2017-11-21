const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bluebird = require('bluebird');
const Redis = require('redis');
bluebird.promisifyAll(Redis.RedisClient.prototype);
bluebird.promisifyAll(Redis.Multi.prototype);


// const Redis = require('thunk-redis');

const redisClient = Redis.createClient();

// redisClient.on('error', (err) => {
//   console.log('Redis Error:', err);
// });

app.on('error', (err) => {
  console.log('Server Error:', err);
});

const router = new Router();
router.get('/services/fortune/:birdname', async (ctx, next) => {
  const params = ctx.params;
  const name = params.birdname;
  let availableYear;

  try {
     availableYear = await redisClient.getAsync(name);
    if (availableYear === null) {
      availableYear = `${Math.round(Math.random() * 100)} years`;
      await redisClient.setAsync(name, availableYear, 'EX', 60);
    }
  } catch (err) {
    console.log(err);
  }

  ctx.body = {'name': name, 'canLive': availableYear};
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
app.use(router.routes())
  .use(router.allowedMethods());

app.use(async ctx => {
  ctx.body = 'Invalid API, Pls Check README for correct API.';
});

app.listen(4001);
