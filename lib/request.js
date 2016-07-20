exports = module.exports;
const url = require('url');
const http = require('http');
const request = require('request');
const fs = require('fs');
const starwars = require('starwars');




function downloadImage(req, res) {
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  request(`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSInbSosQzo1-IJ1c-FDTfaPRdxJHY09HHeblWx8SMNRdn6KXjd`).pipe(res);

  // fs.readFile('../luke.jpg', function(err, data) {
  //   if (err) throw err;
  //   res.end(data); 
  // });
};

function path(req, res) {
  let content = `<html>
  <head>
  <meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
  </head>
  <body>
  <h3>Another response based on path</h3>
  </body>
  </html>`;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
};

function getLuke(req, res) {
  console.log(`Made to getLuke`);
  // 
  let content = `<html>
    <head>
    <meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
    </head>
    <body>
    <h2>RUN TO DAGOBAH.</h2>
    </body>
    </html>`;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
};

function home(req, res) {

  let reqURL = url.parse(req.url).query;
  if(reqURL == `name=luke`) {
    getLuke(req, res);
  } else {
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
  }

};

function nextPage(req, res) {
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
exports.downloadImage = downloadImage;
exports.path = path;

