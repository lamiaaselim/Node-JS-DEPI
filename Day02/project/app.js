const http = require("http");

const app = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/json"});
//   response.write("<h1>This is text/html</h1>");
  const jsonData = {
    message : "This is a json message",
    day: 2,
    subject: "Node JS"
  }
//   response.end();
  response.end(JSON.stringify(jsonData));
});

app.listen(8080, () => {
  console.log("listening on");
});

// npm init -y

// npm install -g nodemon

// npm i experss

// npm i morgan --save-dev
