const studentModel = require("./../Model/studentModel");
StudentSchema = require("./../Model/studentModel");
DepartmentSchema = require("./../Model/departmentModel");

exports.getAllStudent = (request, response, next) => {
  StudentSchema.find()
    .populate({ path: "department", select: "name" })
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.getStudentById = (request, response) => {
  StudentSchema.findOne({ _id: request.params.id })
    .then((data) => {
      if (data == null) throw new Error("Student doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.addStudent = (request, response, next) => {
  let newObject = new StudentSchema({
    _id: request.body.id,
    userName: request.body.username,
    email: request.body.email,
    password: request.body.password,
    department: request.body.department,
  });

  DepartmentSchema.findOne({ _id: request.body.department })
    .then((data) => {
      if (data == null) throw new Error(" validation department problem");
      return newObject.save();
    })
    .then((data) => {
      response.status(201).json({ data: "added", newObject: data });
    })
    .catch((error) => next(error));
};

exports.updateStudent = (request, response, next) => {
  StudentSchema.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: { name: request.body.name },
    }
  )
    .then(() => {
      response.status(200).json({ data: "updated" });
    })
    .catch((error) => next(error));
};

exports.deleteStudent = (request, response, next) => {
  StudentSchema.findOneAndRemove({
    _id: request.params.id,
  })
    .then((data) => {
      if (data == null) throw new Error("Student doesn't exists");
      response.status(200).json({ data: "deleted" });
    })
    .catch((error) => next(error));
};
