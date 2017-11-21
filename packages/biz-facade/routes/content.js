const urllib = require('urllib');

module.exports = [
  async function byName (fastify, options) {
    fastify.get('/content/:name', async function (req, reply) {
      const name = req.params.name;
      let healthInfo = 'No health info for me currently.';
      let locationInfo = 'No location info for me currently.';

      try {
        const healthRes = await urllib.request(`127.0.0.1:4001/services/fortune/${name}`, {
          method: 'GET',
          dataType: 'json'
        });
        const canLive = healthRes.data && healthRes.data.canLive;
        if (canLive) {
          healthInfo = `I may die ${canLive} years later`;
        }
      } catch (err) {
        console.error(err);
        healthInfo = 'No health info for me currently.';
      }

      try {
        const locationRes = await urllib.request(`127.0.0.1:4002`, {
          method: 'GET',
          dataType: 'text',
          data: {
            name
          }
        });
        const location = locationRes.data;
        if (location) {
          locationInfo = `I live at ${location}`;
        }
      } catch (err) {
        console.error(err);
        locationInfo = 'No location info for me currently.';
      }

      reply.send({
        message: `hello, this is ${name};\n${locationInfo};\n${healthInfo}.`
      });
    });
  }
];
