const childModel = require("./../Model/childModel");

ChildSchema = require("./../Model/childModel");
ClassSchema = require("./../Model/classModel");

exports.getAllChild = (requset, response, next) => {
  ChildSchema.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.getChildById = (requset, response, next) => {
  ChildSchema.findOne({ _id: requset.params.id })
    .then((data) => {
      if (data == null) throw new Error("Child doesn't exists");
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};

exports.addChild = (request, response, next) => {
  let newObject = new ChildSchema({
    _id: request.body.id,
    username: request.body.username,
    age: request.body.age,
    level: request.body.level,
    address: request.body.address,
  });
  newObject
    .save()
    .then((data) => {
      response.status(201).json({ data: "added", newObject: data });
    })
    .catch((error) => next(error));
};

exports.updateChild = (request, response, next) => {
  ChildSchema.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: { username: request.body.username },
    }
  )
    .then((data) => {
      response.status(200).json({ data: "updated" });
    })
    .catch((error) => next(error));
};

exports.deleteChild = (request, response, next) => {
  ChildSchema.findOneAndRemove({
    _id: request.params.id,
  })
    .then((data) => {
      response.status(200).json({ data: "deleted" });
    })
    .catch((error) => next(error));
};

exports.getChildClassInfo =(request, response, next) => {
  ClassSchema.findOne({ child: request.params.id })
  .populate('supervisor', 'userName')
  .populate('child', 'username')
  .then(cls => {
    if (!cls) {
      return response.status(404).json({ message: 'Class not found' });
    }
    response.status(200).json(cls);
  })
  .catch(error => next(error));
}

