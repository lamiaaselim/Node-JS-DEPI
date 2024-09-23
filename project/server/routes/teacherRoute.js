const express = require("express");
const controller = require("./../Controller/teacherController");
const router = express.Router();

router.route("/teacher/supervisors").get(controller.getSupervisors);

router
  .route("/teacher")
  .get(controller.getAllTeacher)
  .post(controller.addTeacher)
  .patch(controller.updateTeacher);

router
  .route("/teacher/:id")
  .get(controller.getTeacherById)
  .delete(controller.deleteTeacher);

module.exports = router;
