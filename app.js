var http= require("http");
var fs = require('fs');

function onRequest(request, response){
response.writeHead(200, { 'content-Type': 'text/html'});
fs.readFile("./index.html",null,function(error, data){
 if(error){
response.writeHead(404);
resp.write('Contents you are looking are Not Found');
}else{
response.write(data);
}
response.end();
});
}
http.createServer(onRequest).listen(5050);

// Console will print the message
console.log('Server running at http://127.0.0.1:5050/');

