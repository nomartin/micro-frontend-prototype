var static = require('node-static');

var fileServer = new static.Server('./dist',
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  }
);

require('http').createServer(function (request, response) {
  console.log(request.method + ': ' + request.url);
  request.addListener('end', function () {
    fileServer.serve(request, response);
  }).resume();
}).listen(8080);

console.log("> node-static is listening on http://127.0.0.1:8080");
