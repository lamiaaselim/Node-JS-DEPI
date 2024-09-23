const teacherModel = require("./../Model/teacherModel");

TeacherSchema = require("./../Model/teacherModel");

ClassSchema = require("./../Model/classModel");

exports.getAllTeacher = (requset, response, next) => {
  TeacherSchema.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.getTeacherById = (requset, response, next) => {
  TeacherSchema.findOne({ _id: requset.params.id })
    .then((data) => {
      if (data == null) throw new Error("Teacher doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.addTeacher = (request, response, next) => {
  let newObject = new TeacherSchema({
    _id: request.body.id,
    userName: request.body.username,
    email: request.body.email,
    password: request.body.password,
    image: request.body.image,
  });

  newObject
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", newObject: data });
    })
    .catch((error) => next(error));
};

exports.updateTeacher = (request, response, next) => {
  TeacherSchema.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: { userName: request.body.userName },
    }
  )
    .then(() => {
      response.status(200).json({ message: "updated" });
    })
    .catch((error) => next(error));
};

exports.deleteTeacher = (request, response, next) => {
  ClassSchema.findOneAndRemove({
    _id: request.params.id,
  })
    .then(() => {
      response.status(200).json({ message: "deleted" });
    })
    .catch((error) => next(error));
};

exports.getSupervisors = (request, response, next) => {
  ClassSchema.find({})
    .populate({ path: "supervisor", select: "userName" })
    .then((classes) => {
      const supervisors = classes.map((cls) => cls.supervisor);
      response.status(200).json(supervisors);
    })
    .catch((error) => next(error));
};
