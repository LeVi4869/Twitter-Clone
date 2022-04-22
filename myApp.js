//import node stuff
var http = require('http');

//creates a server
var server = http.createServer((req, res) =>    {
    console.log("You joined Pog");
})

server.listen(3001);

