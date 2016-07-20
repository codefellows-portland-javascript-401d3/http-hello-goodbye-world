const server = require('./server');

module.exports.route = function(handle, pathname, req, res) {
  if(typeof handle[pathname] === `function`) {
    handle[pathname](req, res);
  } else {
    res.statusCode = 404;
    let content = `<html>
    <head>
    <meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
    </head>
    <body>
    <h3>Error ${res.statusCode}</h3>
    </body>
    </html>`;
    res.write(content);
    res.end();
    return;
  }
};


