const Router = require("express").Router();
const User = require("../models/user");
const authMiddleware = require("../middlewares/authmiddleware");

// Get User Profile
Router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.find(req.user.userId).select("-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

Router.get("/allUsers", authMiddleware, async (req, res) => {
  try {
    const user = await User.find({ _id: { $ne: req.user.userId } }).select(
      "-password"
    ); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = Router;
