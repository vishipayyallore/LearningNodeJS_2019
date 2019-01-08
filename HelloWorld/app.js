const http = require('http');

const hostName = '127.0.0.1';
const portNumber = 3003;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Node JS World\n');
} );

server.listen( portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
