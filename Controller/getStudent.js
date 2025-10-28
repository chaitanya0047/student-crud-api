const Student = require("../Model/studentModel");

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({
      success: true,
      data: student,
      message: "The Student Data Is Successfully Fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};

exports.getStudentByID = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById({
      _id: id,
    });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "No Data Is Found With Given ID",
      });
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "The Student Data Is Successfully Fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};
