const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected successfully");
});

db.on("error", (err) => {
  console.log("Database connection error:", err);
});

module.exports = db;
