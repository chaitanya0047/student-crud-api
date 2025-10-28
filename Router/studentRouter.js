const express = require("express");
const { createStudent } = require("../Controller/createStudent");
const { getStudent, getStudentByID } = require("../Controller/getStudent");
const { updateStudent } = require("../Controller/updateStudent");
const { deleteStudent } = require("../Controller/deleteStudent");
const Router = express.Router();

Router.get("/getStudent", getStudent);
Router.get("/getStudent/:id", getStudentByID);
Router.post("/createStudent", createStudent);
Router.put("/updateStudent/:id", updateStudent);
Router.delete("/deleteStudent/:id", deleteStudent);

module.exports = Router;
