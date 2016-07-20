const server = require('./lib/server');
const port = 3000;
server.listen(port);

console.log(`HTTP Server started on port: ${port}`);
