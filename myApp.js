//import node stuff
const http = require('http');
const displayContent = require('./route');

//creates a server
const server = http.createServer(displayContent);

server.listen(3001);

