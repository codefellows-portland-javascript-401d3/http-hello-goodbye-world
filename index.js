const server = require('./server');
const route = require('./route');
const request = require('./request');




//handles routes for page
const handle = {};
handle['/'] = request.home;
handle['/home'] = request.home;
handle['/nextPage'] = request.nextPage;


server.startServer(route.route, handle);