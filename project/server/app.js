const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
//mongoose open connection local mongoDB
const mongoose = require("mongoose");
const NotFoundMiddleware = require("./Middelwares/NotFoundMW");
const ErrorMiddleware = require("./Middelwares/ErrorMW");
const studentRouter = require("./routes/studentRoute");
const departmentRouter = require("./routes/departmentRoute");
const childRouter = require("./routes/childRoute");
const teacherRouter = require("./routes/teacherRoute");
const classRouter = require("./routes/classRoute");

dotenv.config();

const PORT = process.env.PORT || 8080;

// // Set global mongoose options
// mongoose.set("strictPopulate", false);

const server = express();
//mongoose open connection local mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/NursyStudent")
  .then(() => {
    console.log("DB Connected");
    // Listening of Server
    server.listen(PORT, () => {
      console.log(`I am listening ... ${PORT}`);
    });
  })
  .catch(() => {
    console.log("DB connection problem" + error);
  });

//-------------------------------------- server layers
//first MW  logining use morgan for register url ,method

server.use(morgan("dev"));

//********************* routes***********************/
//authenticattion
server.use(express.json());

server.use(studentRouter);
server.use(departmentRouter);
server.use(childRouter);
server.use(teacherRouter);
server.use(classRouter);

/*****************************************************/
//Not Found Handling MW
server.use(NotFoundMiddleware.handle);

// Error Handling MW
server.use(ErrorMiddleware.handle);
