## Project Sparrow

A tiny but complete application, composed of several services.

### Global Prerequisite

- [meteor cli](https://www.meteor.com/)
- [redis](https://redis.io/)
- [mongodb](https://www.mongodb.com)
- [node.js](https://nodejs.org/)
- [lerna](https://lernajs.io/)

### Usage

Just run `npm run bootstrap`, all services including redis/mongo will be launched.

Then you can visit http://127.0.0.1:3001 to go through this application. 

### Services Stack

- ViewService@http://127.0.0.1:3001 (packages/view-service, built with `meteor` + `mongo`)
    - APIFacade@http://127.0.0.1:4000 (packages/biz-facade, built with `fastify`)
        - HealthService@http://127.0.0.1:4001 (packages/biz-4001, built with `koa` + `redis`)
        - LocationService@http://127.0.0.1:4002 (packages/biz-4002, built with `loopback` + `typescript`)
  

