const http = require('http');

const hostName = '127.0.0.1';
const portNumber = 3003;

const output = '<h1 color=blue>Hello Node JS World</h1>';

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(output);
} );

server.listen( portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
