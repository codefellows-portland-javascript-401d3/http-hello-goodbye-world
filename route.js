exports = module.exports;
const server = require('./server');

function route(handle, pathname, res, req) {
  if(typeof handle[pathname] === `function`) {
    handle[pathname](res, req);
  } else {
    console.log(`No request handler for ${pathname}`);
  }
};

exports.route = route;