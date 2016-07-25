const http = require('http');
const url = require('url');
const querystring = require('querystring');

function onRequest (req, res) {
  const params = url.parse(req.url);
  const query = querystring.parse(params.query);

  if(req.url === '/') {
    res.statusCode = 200;
    res.write('Path "/" Loaded!');
    res.end();
  } else

  if (req.url === '/start') {
    res.statusCode = 200;
    res.write('Path "/start" Loaded!');
    res.end();
  } else

  if(req.url.startsWith('/count')) {
    res.statusCode = 200;
    if (query.num) res.write(query.num + ' is the queried number.');
    res.end();
  } else

  if(req.url === '/postest' && req.method === 'POST') {
    res.statusCode = 200;
    res.write('Path "/postest" Loaded! Mode: POST');
    res.end();
  } else {
    res.statusCode = 400;
    res.write('Bad request.');
    res.end();
    console.log('Bad request:' + req.url);
  }
}

module.exports = http.createServer(onRequest);
