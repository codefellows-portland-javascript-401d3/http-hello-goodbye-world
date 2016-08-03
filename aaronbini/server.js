const http = require('http');
const route = require('./routes.js');

const PORT = 8888;

const server = http.createServer(route.onRequest);

server.listen(8888, () => {
  console.log('Server has started');
  console.log(`Server listening on http://localhost/${PORT}`);
});

module.exports = server;
