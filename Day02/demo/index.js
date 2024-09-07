const express = require("express");
const stdRouter = require("./Routes/stdRoute");
const server = express();

server.listen(8082, () => {
  console.log("listening on port 8082");
});

//-------------------------------------- server layers
// first MW   logining  url ,method
server.use((request, repsonse, next) => {
  console.log(request.url, request.method);
  next();
});

//********************* routes***********************/

server.use(stdRouter);

/*****************************************************/
//Not Found
server.use((request, repsonse, next) => {
  repsonse.status(404).json({ message: "Not found" });
});

//Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ message: "error : " + error });
});

