exports = module.exports;
const starwars = require('starwars');




function getLuke(res, req) {
  let options = {
    hostname: `http://www.ign.com`,
    path: `/articles/2014/09/11/9-things-you-probably-didnt-know-about-luke-skywalker`
  };

  let request = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      let body = ``;
      body += chunk;
      console.log(`BODY: ${body}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });
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
};

exports.home = home;
exports.nextPage = nextPage;