const classModel = require("./../Model/classModel");

ClassSchema = require("./../Model/classModel");

exports.getAllClass = (requset, response, next) => {
  ClassSchema.find({})
    .populate({ path: "child", select: "username" })
    .populate({ path: "supervisor", select: "userName" })
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.getClassById = (requset, response, next) => {
  ClassSchema.findOne({ _id: requset.params.id })
    .then((data) => {
      if (data == null) throw new Error("Class doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.addClass = (request, response, next) => {
  let newObject = new ClassSchema({
    _id: request.body.id,
    name: request.body.name,
    supervisor: request.body.supervisor,
    child: request.body.child,
  });

  newObject
    .save()
    .then((data) => {
      response.status(201).json({ data: "added", newObject: data });
    })
    .catch((error) => next(error));
};

exports.updateClass = (request, response, next) => {
  // Check if the id is provided
  if (!request.body.id) {
    return next(new Error("Class ID is required"));
  }

  ClassSchema.updateOne(
    { _id: request.body.id },
    { $set: { name: request.body.name } }
  )
    .then((result) => {
      // Check if the update actually modified any document
      if (result.matchedCount == 0) throw new Error("Class doesn't exist");
      response.status(200).json({ message: "Class updated successfully" });
    })
    .catch((error) => next(error));
};

exports.deleteClass = (request, response, next) => {
  ClassSchema.findOneAndRemove({
    _id: request.params.id,
  })
    .then((data) => {
      if (data == null) throw new Error("Class doesn't exists");
      response.status(200).json({ message: "deleted" });
    })
    .catch((error) => next(error));
};

exports.getClassChildrenInfo = (request, response, next) => {
  ClassSchema.findById(request.params.id)
  .populate('child', 'username age')
  .then(cls => {
    if (!cls) {
      return response.status(404).json({ message: 'Class not found' });
    }
    response.status(200).json(cls.child);
  })
  .catch(error => next(error));
}
exports.getClassSupervisorInfo = (request, response, next) => {
  ClassSchema.findById(request.params.id)
    .populate('supervisor', 'userName email')
    .then(cls => {
      if (!cls) {
        return response.status(404).json({ message: 'Class not found' });
      }
      response.status(200).json(cls.supervisor);
    })
    .catch(error => next(error));
}