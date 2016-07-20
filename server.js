const http = require('http');
const url = require('url');

const handle = {};
handle['/alpha'] = alpha;
handle['/beta'] = beta;

function onRequest (request, response) {
  var pathname = url.parse(request.url).pathname;

  route(handle, pathname, response);
}

function route (handle, pathname, response) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not found');
    response.end();
  }
}

function alpha (response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Alpha successfully called!');
  response.end();
}

function beta (response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Beta successfully called!');
  response.end();
}

http.createServer(onRequest).listen(8888);
