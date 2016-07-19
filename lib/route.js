const server = require('./server');

module.exports.route = function(handle, pathname, res, req) {
  console.log(pathname);
  if(typeof handle[pathname] === `function`) {
    handle[pathname](res, req);
  } else {
    console.log(`No request handler for ${pathname}`);
  }
};


