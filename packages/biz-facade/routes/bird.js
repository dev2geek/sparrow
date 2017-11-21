module.exports = [
  async function bird2 (fastify, options) {
    fastify.get('/bird/2', function (req, reply) {
      reply.send({
        name: 'bird_2'
      });
    })
  },
  async function bird1 (fastify, options) {
    fastify.get('/bird/1', function (req, reply) {
      reply.send({
        name: 'bird_1'
      });
    })
  }
];
