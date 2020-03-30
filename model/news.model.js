let mongoose = require("mongoose");

let news_schema = mongoose.Schema({
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "collection_name"
  },
  collection_name: { type: String, enum: ["reviews", "articles"] },
  created_date: { type: Date, default: new Date() }
});
const family_schema = mongoose.Schema({
  wife: String,
  children: [String],
  customer_id: String
});
const customer_schema = mongoose.Schema({
  customer_name: "",
  family: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "family"
  }
});
const news_model = mongoose.model("news", news_schema);

module.exports = news_model;
