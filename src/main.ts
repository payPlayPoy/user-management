
import express from 'express';
import {ConfigRepository} from "./core/config/config-repository";

const app = express();
const config = new ConfigRepository();
const appPort = config.getConfig('APP_PORT', 3000);
app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.listen(appPort, () => console.log(`Running on port ${appPort}`));
