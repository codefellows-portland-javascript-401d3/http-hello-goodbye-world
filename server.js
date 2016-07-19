const http = require('http');
const url = require('url');

const PORT = 8888;

function onRequest (req, res) {
  const pathname = url.parse(req.url).pathname;
  if (typeof handler[pathname] === 'function') {
    console.log(`Routing request for ${pathname}`);
    handler[pathname](req, res);
  } else {
    console.log(`${pathname} could not be found`);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Error: Not Found');
    res.end();
  }
};

function start (req, res) {
  res.write('<p>Hello World.</p>');
  res.end();
};

function goodbye (req, res) {
  res.write('<p>Goodbye World.</p>');
  res.end();
};

var handler = {};
handler['/'] = start;
handler['/goodbye'] = goodbye;

const server = http.createServer(onRequest);

server.listen(8888, () => {
  console.log('Server has started');
  console.log('Server listening on http://localhost/', PORT);
});

module.exports = server;
