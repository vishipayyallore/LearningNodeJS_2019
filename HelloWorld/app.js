const http = require('http');

const hostName = '127.0.0.1';
const portNumber = 3003;

const output = `
                <head>
                    <title>Hello Node JS</title>
                </head>
                <body bgcolor=#ABCEDF>
                    <h1 style=color:blue; align=center>Hello Node JS World</h1>
                    <HR>
                </body>
                `;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(output);
} );

server.listen( portNumber, hostName, () => {
    console.log(`Server running at http://${hostName}:${portNumber}/`);
});
