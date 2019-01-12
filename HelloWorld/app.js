const http = require('http');
var fileSystem = require("fs");

const hostName = '127.0.0.1';
const portNumber = 3003;

var output = fileSystem.readFileSync('./HelloWorld/outputHTML.txt');

/*
fileSystem.readFile('./HelloWorld/outputHTML.txt', function(error, data){
    if(error){
        return console.error(error);
    }
    output = data.toString();
});
*/

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(output);
} );

server.listen( portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
