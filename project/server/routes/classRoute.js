const express = require("express");
const controller = require("./../Controller/classController");

const router = express.Router(); //craete express route object and return it

router
  .route("/class")
  .get(controller.getAllClass)
  .post(controller.addClass)
  .patch(controller.updateClass);

router
  .route("/class/:id")
  .get(controller.getClassById)
  .delete(controller.deleteClass);

router.route("/class/child/:id").get(controller.getClassChildrenInfo);

router.route("/class/teacher/:id").get(controller.getClassSupervisorInfo);

module.exports = router;
