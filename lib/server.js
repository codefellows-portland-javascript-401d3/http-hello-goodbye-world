const http = require('http');
const url = require('url');
const route = require('./route');
const request = require('./request');





module.exports = http.createServer((req, res) => {
  //handles routes for page
  const handle = {};
  handle['/'] = request.home;
  handle['/home'] = request.home;
  handle['/nextPage'] = request.nextPage;

  console.log(`Server running on 8000`);
  let pathname = url.parse(req.url).pathname;
  route.route(handle, pathname, res, req);
});









