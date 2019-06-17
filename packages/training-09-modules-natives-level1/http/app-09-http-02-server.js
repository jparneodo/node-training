'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.path);

  const data = `
${req.method} ${req.url}

HEADERS: ${Object.entries(req.headers).map(h => `\n${JSON.stringify(h)}`)}
`;

  res.end(data);
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000);
