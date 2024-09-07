// Entry point => File 
const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("This is plain text response from the server.");
  res.end();
});

const PORT = 8080;
server.listen( PORT, ()=> {
    console.log("Listening on port  " + PORT)
});