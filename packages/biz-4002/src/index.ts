import {HouseApplication} from "./application";
import {RestServer} from '@loopback/rest';

const app = new HouseApplication();

app.start()
    .then(async () => {
        const server = await app.getServer(RestServer);
        console.log(`House service is running on port ${await server.get('rest.port')}`);
    })
    .catch(err => {
        console.error(`Unable to start application: ${err}`);
    });