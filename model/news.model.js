let mongoose = require("mongoose");

let news_schema = mongoose.Schema({
  reference: String,
  collection_name: String,
  created_date: Date
});

const news_model = mongoose.model("news", news_schema);

module.exports = news_model;
