const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRoute");
const departmentRouter = require("./routes/departmentRoute");

const server = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/MERNDEPISTD")
  .then(() => {
    console.log("DB Connected!");
    server.listen(process.env.PORT || 8082, () => {
      console.log("I am listening ... ");
    });
  })
  .catch((err) => console.log(err));
  
// mongoose.connect("mongodb://127.0.0.1:27017/depiR01");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/depiR01")
//   .then(() => {
//     console.log("DB connection established");
//   })
//   .catch((err) => console.log("Error connecting : " + err));

// mongoose
//   .connect("mongodb://127.0.0.1:27017/depiR01")
//   .then(() => {
//     console.log("DB connection established");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to DB: ${err}`);
//   });
// mongoose
//   .connect("mongodb://127.0.0.1:27017/depiR01")
//   .then(() => {
//     console.log("DB connected...");
//     server.listen(process.env.PORT || 8082, () => {
//       console.log("I am listening ... ");
//     });
//   })
//   .catch((error) => {
//     console.log("DB Connection Peoblem " + error);
//   });

//-------------------------------------- server layers
//first MW   logining  url ,method
server.use((request, response, next) => {
  console.log(request.url, request.method);
  next();
});
//morgan
//********************* routes***********************/
//authenticattion
server.use(express.json());

server.use(studentRouter);
server.use(departmentRouter);

/*****************************************************/
//Not Found
server.use((request, repsonse, next) => {
  repsonse.status(404).json({ message: "not found" });
});

//Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ message: "MW error : " + error });
});
