const http = require('http');
const fileSystem = require("fs");

const hostName = '127.0.0.1';
const portNumber = 3003;
const statusCode = 200;

var output = '';
fileSystem.readFile('./16Jan2019/Data/Sample.html', function (error, data) {
    if (error) {
        return console.error(error);
    }
    output = data.toString();
});

const server = http.createServer((req, res) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(output + ' <h1>' + new Date(Date.now()).toLocaleString() + '</h1>');
    res.end();
});

server.listen(portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
