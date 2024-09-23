const departmentModel = require("./../Model/departmentModel");

DepartmentSchema = require("./../Model/departmentModel");

exports.getAllDepartments = (requset, response, next) => {
  DepartmentSchema.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.getAllDepartmentById = (requset, response, next) => {
  DepartmentSchema.findOne({ _id: requset.params.id })
    .then((data) => {
      if (data == null) throw new Error("Department doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.addDepartment = (request, response, next) => {
  let newObject = new DepartmentSchema({
    _id: request.body.id,
    name: request.body.name,
    location: request.body.location,
  });

  newObject
    .save()
    .then((data) => {
      response.status(201).json({ data: "added", newObject: data });
    })
    .catch((error) => next(error));
};

exports.updateDepartment = (request, response, next) => {
  DepartmentSchema.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: { name: request.body.name },
    }
  )
    .then((data) => {
      response.status(200).json({ data: "updated" });
    })
    .catch((error) => next(error));
};

exports.deleteDepartment = (request, response, next) => {
  DepartmentSchema.findOneAndRemove({
    _id: request.params.id,
  })
    .then(() => {
      response.status(200).json({ data: "deleted" });
    })
    .catch((error) => next(error));
};
