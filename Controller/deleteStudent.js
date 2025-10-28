const Student = require("../Model/studentModel");

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete({
      _id: id,
    });
    res.status(201).json({
      success: true,
      message: "Successfully Deleted Student data",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
