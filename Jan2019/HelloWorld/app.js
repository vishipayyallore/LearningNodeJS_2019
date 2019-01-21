const http = require('http');
const fileSystem = require("fs");
// const datetime = require('node-datetime');

const hostName = '127.0.0.1';
const portNumber = 3003;
var output = '';

// you should never call readFileSync in a node express/webserver 
// since it will tie up the single thread loop while I/O is performed. 
// var output = fileSystem.readFileSync('./HelloWorld/outputHTML.txt');

fileSystem.readFile('./HelloWorld/outputHTML.txt', function (error, data) {
    if (error) {
        return console.error(error);
    }
    output = data.toString();
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(output + ' <h1>' + new Date(Date.now()).toLocaleString() + '</h1>');
});

server.listen(portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
