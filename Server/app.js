const express = require("express");
const app = express();

app.use(express.json());
const authRoutes = require("./controllers/authControllers");
const userRoutes = require("./controllers/usercontroller");
const chatRouter = require("./controllers/chatcontroller");
const messageRouter=require("./controllers/messageController")


// Home route
app.get("/", (req, res) => {
  res.status(200).send("this is the home page");
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat",chatRouter);
app.use("/api/message",messageRouter);


module.exports = app;
