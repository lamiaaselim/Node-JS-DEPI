const express = require("express");
const controller = require("./../Controller/childController");

const router = express.Router();

router
  .route("/child")
  .get(controller.getAllChild)
  .post(controller.addChild)
  .patch(controller.updateChild);

router
  .route("/child/:id")
  .get(controller.getChildById)
  .delete(controller.deleteChild);

router.route("/child/class/:id").get(controller.getChildClassInfo);

module.exports = router;
