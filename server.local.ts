import http = require('http');
import debug from 'debug';

import app  from './app';

const zero = 0;

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
*/

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: any; }) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
    console.log(`Express application running on port ${port}.`);
    /* console.log('Connecting to db:')
    db.connect */
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const newPort = parseInt(val, 10);

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