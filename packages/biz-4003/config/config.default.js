'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525934668319_1335';

  // add your config here
  config.middleware = [];

  config.cluster = {
    "listen": {
      "port": 4003
    }
  };

  return config;
};
