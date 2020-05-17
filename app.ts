import { createConnection } from 'typeorm';
import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRoutes } from './routes/index.js';

import cookieParser = require('cookie-parser');
import logger = require('morgan');
import cors = require('cors');

const invalidindex = -1;

// create express app
const app = express();

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    /**Aplication settings Begins*/
    app.use(bodyParser.json());
    app.use(logger('dev'));

    // Middlewares for bodyparsing using both json and urlencoding
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    /*express.static is a built in middleware function to serve static files.
    We are telling express server public folder is the place to look for the static files
    */
    app.use((req, res, next) => {/* 
        if (req.url.indexOf('/api') === invalidindex) {
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        } else { */
            return next();
        /* } */
    });

    const allowedOrigins = ['http://localhost:3000',
        'http://localhost:4200',
        'http://localhost:8100',
        'http://localhost',
        'http://virtualwaiterbucket.s3-website-sa-east-1.amazonaws.com',
        'http://ec2-18-231-198-246.sa-east-1.compute.amazonaws.com'];

    app.use(cors({
        origin: (origin, callback) => {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) { return callback(null, true); }
            if (allowedOrigins.indexOf(origin) === invalidindex) {
                const msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    }));

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });


    /**Aplication settings ends*/

    // await connection.synchronize(true); // --> Isso aqui RESETA SEU BANCO!
    // await connection.runMigrations();

}).catch(error => console.log('TypeORM connection error: ', error));

export default app;
