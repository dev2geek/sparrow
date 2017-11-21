import {Application, ApplicationConfig} from '@loopback/core';
import {RestComponent, RestServer} from '@loopback/rest';
import {HouseController} from './controllers';

export class HouseApplication extends Application {
    constructor() {
        super({
            components: [RestComponent],
        });
        const app = this;
        app.controller(HouseController);
    }

    async start() {
        const server = await this.getServer(RestServer);
        server.bind('rest.port').to(4002);
        return await super.start();
    }

    async stop() {
        console.log('House application is shutting down...');
        await super.stop();
    }
}