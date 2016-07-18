const http = require('http');

var server = http.createServer((request, response)=>{

  if(request.url === '/'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello world!');
    response.end();
  } else if(request.url === '/goodbye'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Goodbye world!');
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('Page not found!');
    response.end();
  }

});

server.listen('8000', ()=>{
  console.log('server started on ', server.address().port);
});
