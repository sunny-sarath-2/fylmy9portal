let news_model = require("../model/news.model");

exports.news_get = async data => {
  return await news_model.find();
};

exports.news_post = async data => {
  let new_news = new news_model(data);
  return await new_news.save();
};
