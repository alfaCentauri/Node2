const http = require('http');

const hostname = '127.0.0.1';
const port = 8100;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<div class="container"> <h1>Hola mundo</h1> <p>Esto es un p&aacute;rrafo...</p> </div>');//Contenido
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});