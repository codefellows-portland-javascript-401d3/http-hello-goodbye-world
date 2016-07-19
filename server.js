const http = require('http');
const url = require('url');
const starwars = require('starwars');
exports = module.exports;

function startServer(route, handle) {
  http.createServer((req, res) => {
    console.log(`Server running on 8000`);
    let pathname = url.parse(req.url).pathname;
    route(handle, pathname, res, req);
  }).listen(8000);
};

function home(res, req) {
  let content = `<html>
  <head>
  <meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
  </head>
  <body>
  <h2>Hello World!</h2>
  </body>
  </html>`;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
};

function nextPage(res, req) {
  let content = `<html>
  <head>
  <meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
  </head>
  <body>
  <h2>${starwars()}</h2>
  </body>
  </html>`;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}

exports.startServer = startServer;
exports.home = home;
exports.nextPage = nextPage;

