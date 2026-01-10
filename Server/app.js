const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).send("this is the home page");
});

const authRoutes = require("./controllers/authControllers");
app.use("/api/auth", authRoutes);
module.exports = app;
