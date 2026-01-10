const express = require("express");
const app = express();

app.use(express.json());
const authRoutes = require("./controllers/authControllers");
const userRoutes = require("./controllers/usercontroller");


// Home route
app.get("/", (req, res) => {
  res.status(200).send("this is the home page");
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


module.exports = app;
