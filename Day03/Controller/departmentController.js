const { request } = require("express");
const DepartmentSchema = require("./../Model/departmentModel");

// // // Case 01
exports.getAllDepartments = (requset, response, next) => {
  DepartmentSchema.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    });
};

// // Case 02 use Promises for find()
// exports.getAllDepartments = (requset, response, next) => {
//   DepartmentSchema.find({})
//   .then()
//   .catch()
//   response.status(200).json({ data: [] });
// };

// // Case 03
// exports.getAllDepartments = (requset, response, next) => {
//   DepartmentSchema.find({})
//   .then((data)=> {response.status(200).json(data)})
//   .catch((err)=> next("Error: " + err))
// };

// exports.getAllDepartments = (requset, response, next) => {
//   DepartmentSchema.find({})
//     .then((data) => {
//       response.status(200).json(data);
//     })
//     .catch((error) => next(error));
// };

// // // // Case 01 Old
exports.addDepartment = (request, response, next) => {
  response.status(201).json({ message: "added" });
};

// // // Case 02 Create a new department and save
// exports.addDepartment = (request, response, next) => {
//   let newdepatment = new DepartmentSchema({
//     _id: request.body.id,
//     name: request.body.name,
//   });
//   newdepatment
//     .save()
//     .then(() => {
//       response.status(201).json({ message: "added", newdepatment });
//     })
//     .catch((error) => next(error));
// };

// // // Case 03 Save() return Promise
// exports.addDepartment = (request, response, next) => {
//   let newObject = new DepartmentSchema({
//     _id: request.body.id,
//     name: request.body.name,
//   });
//   newObject.save()
//   .then()
//   .catch()
//   response.status(201).json({ data: "added", newObject });
// };

// // Case 04 : Final Format
exports.addDepartment = (request, response, next) => {
  let newObject = new DepartmentSchema({
    _id: request.body.id,
    name: request.body.name,
  });

  newObject
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", newObject: data });
    })
    .catch((error) => next(error));
};

// // Case01 : old
// exports.updateDepartment = (request, response, next) => {
//   DepartmentSchema.updateOne({_id:request.body.id}, {$set:{name:request.body.name}})
//     .then((data) => {
//       response.status(201).json({ message: "updated" });
//     })
//     .catch((err) => next(err));
// };

// // Case02 : use UpdateOne() which promise
// exports.updateDepartment = (request, response, next) => {
//   DepartmentSchema.updateOne({},{$set:{}})
//     .then((data) => {
//       response.status(201).json({ data: "updated" });
//     })
//     .catch((error) => next(error));
// };

// // Case03 : Remember using UpdateOne({}{})
// exports.updateDepartment = (request, response, next) => {
//   DepartmentSchema.updateOne({},{$set:{}})
//     .then((data) => {
//       response.status(201).json({ data: "updated" });
//     })
//     .catch((error) => next(error));
// };

// // // Case 4: Final Format
exports.updateDepartment = (request, response, next) => {
  DepartmentSchema.updateOne(
    { _id: request.body.id },
    { $set: { name: request.body.name } }
  )
    .then(() => {
      response.status(201).json({ message: "updated" });
    })
    .catch((error) => next(error));
};

// // Case 1: Same Case of Find() but use findOne()
// exports.getDepartmentById = (request, response, next) => {
//   DepartmentSchema.findOne({ _id: request.params.id })
//     .then((data) => {
//       response.status(200).json(data);
//     })
//     .catch((error) => next(error));
// };

// // // Case 2: Final Format In case Not found
exports.getDepartmentById = (request, response, next) => {
  DepartmentSchema.findOne({ _id: request.params.id })
    .then((data) => {
      if (data == null) throw new Error("Dperatment doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.deleteDepartment = (request, response, next) => {
  // /code databse
  response.status(200).json({ data: "deleted" });
};
