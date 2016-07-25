const server = require('./server');
const port = process.argv[2] || 8080;

server.listen(port);
console.log(`Server listening on: ${port}`);
