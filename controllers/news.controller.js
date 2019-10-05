let news_service = require("../services/news.service");

exports.news_get_all = async (req, res) => {
  console.time("news");
  let result = await news_service.news_get();
  res.status(200).json({ data: result });
  console.timeEnd("news");
};

exports.news_get_one = async (req, res) => {
  let data = await news_service.news_get_one(req.params._id);
  res.status(200).json({ data });
};
