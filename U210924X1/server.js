const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello from Ogustus Waters the man');
});

server.listen(8085);