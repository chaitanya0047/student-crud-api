const Student = require("../Model/studentModel");

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rollno, marks, grade } = req.body;
    const student = await Student.findByIdAndUpdate(
      { _id: id },
      { name, rollno, marks, grade, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    res.status(201).json({
      success: true,
      data: student,
      message: "Updated Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Servor Error",
    });
  }
};
