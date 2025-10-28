const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/database");
const studentRoutes = require("./Router/studentRouter");
const PORT = process.env.PORT || 3000;
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" Basic Student API is running...");
});

app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log("server is listening");
});
