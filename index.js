const server = require('./server');
const router = require('./router');
const handlers = require('./handlers');

let handle = {};

handle['/'] = handlers.one;
handle['/one'] = handlers.one;
handle['/two'] = handlers.two;

server.start(router.route, handle);
