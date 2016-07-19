exports = module.exports;
const starwars = require('starwars');





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
};

exports.home = home;
exports.nextPage = nextPage;