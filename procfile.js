'use strict';

module.exports = (pandora) => {

  pandora
    .cluster('./packages/biz-facade/index.js');

  pandora
    .fork('egg', './packages/biz-4003/server.js');

  /**
   * you can also use cluster mode to start application
   */
  // pandora
  //   .cluster('./packages/biz-facade/index.js');

  /**
   * you can create another process here
   */
  // pandora
  //   .process('background')
  //   .nodeArgs(['--expose-gc']);

  /**
   * more features please visit our document.
   * https://github.com/midwayjs/pandora/
   */

};