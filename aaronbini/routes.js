const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const request = require('request');

function onRequest (req, res) {
  const pathname = url.parse(req.url).pathname;
  if (typeof handler[pathname] === 'function') {
    console.log(`Routing request for ${pathname}`);
    res.writeHead(200, {'Content-Type': 'text/html'});
    handler[pathname](req, res);
  } else {
    console.log(`${pathname} could not be found`);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Error: Not Found');
    res.end();
  }
};

//helper function, not sure where to put this
function isNotEmpty(object) {
  for(var key in object) {
    return true;
  }
  return false;
}

function start (req, res) {
  const querystring = url.parse(req.url, true).query;
  if (isNotEmpty(querystring)) {
    res.write(`<p>Hello ${querystring.firstname} ${querystring.lastname}`);
  } else {
    res.write('<p>Hello World.</p><p>Enter "?firstname=[your first name]&lastname=[your last name]" at the end of the url for a tailored hello.</p>');
  }
  res.end();
};

function readFile (req, res) {
  const pathname = url.parse(req.url).pathname;
  const querystring = url.parse(req.url, true).query;
  if (isNotEmpty(querystring) && querystring.format === 'json') {
    fs.createReadStream(path.join(__dirname, 'lib/dummy.json')).pipe(res);
  } else {
    fs.createReadStream(path.join(__dirname, 'lib/index.html')).pipe(res);
  }
}

function requester (req, res) {
  request('https://teamtreehouse.com/aaronbini.json', function (error, response, body) {
    if (error) console.log(error);
    res.write(body);
    res.end();
  });
}

function goodbye (req, res) {
  const querystring = url.parse(req.url, true).query;
  if (isNotEmpty(querystring)) {
    res.write(`<p>Goodbye ${querystring.firstname} ${querystring.lastname}`);
  } else {
    res.write('<p>Goodbye World.</p><p>Enter "?firstname=[your first name]&lastname=[your last name]" at the end of the url for a tailored goodbye.</p>');
  }
  res.end();
};

var handler = {};
handler['/'] = start;
handler['/goodbye'] = goodbye;
handler['/readfile'] = readFile;
handler['/requester'] = requester;

module.exports.onRequest = onRequest;
