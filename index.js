const http = require('http');
const cowsay = require('cowsay');

const server = http.createServer((request, response)=>{

  if(request.url === '/'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : 'Hello world!'}));
    response.end();

  } else if(request.url === '/bye'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : 'Goodbye world!'}));
    response.end();

  } else {

    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Page not found!\n\n\n');
    response.write(`${request.url} is not a valid page.`);
    response.end();
  }

});

server.listen('8000', ()=>{
  console.log('server started on ', server.address().port);
});
