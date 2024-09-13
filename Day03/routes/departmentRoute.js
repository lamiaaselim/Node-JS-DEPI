const express = require("express");
const controller = require("./../Controller/departmentController");
const router = express.Router();

router
  .route("/department")
  .get(controller.getAllDepartments)
  .post(controller.addDepartment)
  .patch(controller.updateDepartment);

router
  .route("/department/:id")
  .get(controller.getDepartmentById)
  .delete(controller.deleteDepartment);

module.exports = router;
