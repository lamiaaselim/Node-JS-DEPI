const express = require("express");

const router = express.Router();

const controller = require("./../Controllers/stdController");

router
  .route("/student")
  .get(controller.getAllStudents)
  .post(controller.addStudent)
  .patch(controller.updateStudent);


module.exports = router;
