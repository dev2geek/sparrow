const birdRoutes = require('./bird');
const contentRoutes = require('./content');

module.exports = [].concat(birdRoutes, contentRoutes);
