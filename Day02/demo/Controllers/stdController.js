exports.getAllStudents = (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, name: "xxx" },
      { id: 2, name: "yyy" },
      { id: 3, name: "zzzz" },
    ],
  });
};

exports.addStudent = (req, res) => {
  res.status(200).json({ message: "student added" });
};

exports.updateStudent = (req, res) => {
  res.status(200).json({ data: "student updated " });
};

