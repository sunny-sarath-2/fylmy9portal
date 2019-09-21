let mongoose = require("mongoose");

let user_schema = mongoose.Schema({
  username: String,
  password: String,
  type: Number,
  status: Boolean
});

let user_model = mongoose.model("users", user_schema);
module.exports = user_model;
