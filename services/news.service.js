let news_model = require("../model/news.model");

exports.news_get = async () => {
  return await news_model
    .find()
    .populate({ path: "reference", match: { status: { $eq: true } } })
    .sort({ created_date: -1 });
};
exports.news_get_one = async id => {
  return await news_model
    .find({ reference: id })
    .populate({ path: "reference" });
};
exports.news_post = async data => {
  let new_news = new news_model(data);
  return await new_news.save();
};
