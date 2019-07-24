"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var express = require("express");
var bodyParser = require("body-parser");
var index_js_1 = require("./routes/index.js");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var debug_1 = require("debug");
var http = require("http");
var invalidindex = -1;
var zero = 0;
// create express app
var app = express();
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
typeorm_1.createConnection().then(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var allowedOrigins;
    return tslib_1.__generator(this, function (_a) {
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
        app.use(function (req, res, next) {
            return next();
            /* } */
        });
        allowedOrigins = ['http://localhost:3000',
            'http://localhost:4200',
            'http://localhost:8100',
            'http://localhost',
            'http://ec2-18-231-198-246.sa-east-1.compute.amazonaws.com'];
        app.use(cors({
            origin: function (origin, callback) {
                // allow requests with no origin
                // (like mobile apps or curl requests)
                if (!origin) {
                    return callback(null, true);
                }
                if (allowedOrigins.indexOf(origin) === invalidindex) {
                    var msg = 'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.';
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        }));
        // register all application routes
        index_js_1.AppRoutes.forEach(function (route) {
            app[route.method](route.path, function (request, response, next) {
                route.action(request, response)
                    .then(function () { return next; })
                    .catch(function (err) { return next(err); });
            });
        });
        /**
         * Listen on provided port, on all network interfaces.
        */
        server.listen(port);
        server.on('error', onError);
        server.on('listening', onListening);
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log('TypeORM connection error: ', error); });
/**Support Functions */
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var newPort = parseInt(val, 10);
    if (isNaN(newPort)) {
        // named pipe
        return val;
    }
    if (newPort >= zero) {
        // newPort number
        return newPort;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    console.log("Express application running on port " + port + ".");
    /* console.log('Connecting to db:')
    db.connect */
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug_1.default('Listening on ' + bind);
}
//# sourceMappingURL=app.js.map