let mongoose = require("mongoose");

let article_schema = mongoose.Schema({
  title: String,
  image: String,
  article: String,
  tags: [String],
  status: Boolean,
  created_date: Date
});

const article_model = mongoose.model("articles", article_schema);

module.exports = article_model;
