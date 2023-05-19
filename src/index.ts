import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import App from './services/ExpressService';;
import db from './models';


const startServer = async () => {
    const APP_PORT = process.env.PORT || 3000;
    const app = express();

    await App(app);

    // db.sequelize.sync().then(() => {
    //     console.log('sync successfully');
    // }).catch((err) => {
    //     console.log(err);
    // })
    app.listen(APP_PORT, () => {
        console.log('listening on port ' + APP_PORT);
    });
}

startServer();