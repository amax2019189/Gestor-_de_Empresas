'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { dbConnection } from './mongo.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Aqui van las importanciones que trabajemos para agregarles URL`s

        this.middleware();
        this.conectarDB();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middleware(){

    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

export default Server;