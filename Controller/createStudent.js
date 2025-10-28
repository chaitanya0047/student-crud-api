const Student = require("../Model/studentModel");

exports.createStudent = async (req, res) => {
  try {
    const { name, section, rollno, marks, grade } = req.body;

    const student = await Student.create({
      name,
      section,
      rollno,
      marks,
      grade
    });

    res.status(201).json({
      success: true,
      data: student,
      message: "Successfully created student data",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Failed to create student data",
    });
  }
};
