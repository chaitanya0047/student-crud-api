const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: String,
    section: String,
    rollno: Number,
    marks: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", studentSchema);
