var http = require ('http');

var PORT = 7000;

var server = http.createServer(function (request, response) {
	response.end('server one: ' + request.url);
});

server.listen(7000, function(err) {
	console.log("I think you are pretty, both inside and out.", PORT);
});

var PORT2 = 7500;

var server = http.createServer(function (request, response) {
	response.end('server two: ' + request.url);
});

server.listen(7000, function(err) {
	console.log("I will cut you open to find out for sure.", PORT);
});

