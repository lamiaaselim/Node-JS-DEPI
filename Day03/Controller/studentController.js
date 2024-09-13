const StudentSchema = require("./../Model/studentModel");
const DepartmentSchema = require("./../Model/departmentModel");

// exports.getAllStudent = (request, response, next) => {
//   StudentSchema.find({}).populate({path: 'departments', select:"name"})
//     .then((data) => {
//       response.status(200).json(data);
//     })
//     .catch((error) => next(error));
// };

// exports.addStudent = (request, response, next) => {
//   let newStudent = new StudentSchema({
//     _id: request.body.id,
//     userName: request.body.userName,
//     department: request.body.department,
//   });

//   newStudent.save()
//     .then(() => {
//       response.status(201).json({ data: "added" });
//     })
//     .catch((error) => next(error));
// };

exports.addStudent = (request, response, next) => {
  let newStudent = new StudentSchema({
    _id: request.body.id,
    userName: request.body.userName,
    department: request.body.department,
  });
  DepartmentSchema.findOne({ _id: request.body.department })
    .then((data) => {
      if (data == null) throw new Error(" validation department problem");
      return newStudent.save();
    })
    .then(() => {
      response.status(201).json({ data: "added" });
    })
    .catch((error) => next(error));
};

// // Case 2: use populate
// exports.getAllStudent = (request, response, next) => {
//   StudentSchema.find()
//     .populate({ path: "department"})
//     .then((data) => {
//       response.status(200).json(data);
//     })
//     .catch((error) => next(error));
// };

//Case 3: use populate and select data not all Object
exports.getAllStudent = (request, response, next) => {
  StudentSchema.find({})
    .populate({ path: "department", select: "name" })
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.updateStudent = (request, response, next) => {
  // /code databse
  //3- request httpbody
  console.log(request.body);
  response.status(200).json({ data: "update" });
};

exports.getStudentById = (request, response) => {
  response.status(200).json({ data: { id: request.params.id } });
};

exports.deleteStudent = (request, response, next) => {
  // /code databse
  response.status(200).json({ data: "deleted" });
};
