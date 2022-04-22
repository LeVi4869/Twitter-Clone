//import node stuff
const http = require('http');
const displayContent = require('./route');
const colors = require('colors');

//creates a server
const server = http.createServer(displayContent);

server.listen(3001);

console.log('hello'.green);

