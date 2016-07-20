const http = require('http');
const url = require('url');
const route = require('./route');
const request = require('./request');





module.exports = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  //handles routes for page
  const handle = {};
  handle['/'] = request.home;
  handle['/home'] = request.home;
  handle['/nextPage'] = request.nextPage;
  handle['/path'] = request.path;
  handle['/image'] = request.downloadImage;
  console.log(`Server running on 8000`);
  
  route.route(handle, pathname, req, res);
});









