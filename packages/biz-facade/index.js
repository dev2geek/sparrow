// require('pmx').init({
//   transactions : true
// });

const fastify = require('fastify')();
const viewRoutes = require('./routes/index');

fastify.register(viewRoutes, function (err) {
  if (err) {
    throw err;
  }
});

fastify.listen(4000, err => {
  if (err) {
    throw err;
  }
  console.log(`server listening on ${fastify.server.address().port}`);
});
