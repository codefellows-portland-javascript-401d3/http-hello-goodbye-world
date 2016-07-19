const server = require('./server');
const route = require('./route');




//handles routes for page
const handle = {};
handle['/'] = server.start;
handle['/home'] = server.home;
handle['/nextPage'] = server.nextPage;


server.startServer(route.route, handle);