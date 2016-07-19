const http = require('http');
const figlet = require('figlet');

http.createServer( (req,res) => {
  
  if (req.url === '/') {
    render('Hello World!', res);
    return
  };

  if (req.url === '/exit') {
    render('Goodbye World!',res);
    return
  };
  
}).listen(8080);

console.log('HTTP Server started on port: 8080');

function render(str,res) {
  figlet(str, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      res.statusCode = 501;
    } else {
      res.statusCode = 200;
      res.write(data);
    }
    res.end();
  });
}