 console.log('BYBY');
 console.log(process.argc);
 console.log(process.argv[1]);
 console.log(process.argv[2]);
 console.log(process.argv[3]);
 console.error('BYBY2');
 
 console.log('byby');

 var http = require('http');
 
 http.createServer(function (req, resp) {
   resp.writeHead(200, { 'Content-Type': 'text/plain' });
   resp.end('hellloooo node.js BYBY777!!!');
 }).listen(process.argv[3]);
