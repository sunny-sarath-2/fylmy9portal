let news_model = require("../model/news.model");

exports.news_get = async () => {
  return await news_model
    .find()
    .populate("reference")
    .sort({ created_date: -1 });
};

exports.news_post = async data => {
  let new_news = new news_model(data);
  return await new_news.save();
};
