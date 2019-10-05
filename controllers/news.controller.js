let news_service = require("../services/news.service");

exports.news_get_all = async (req, res) => {
  console.time("news");
  let result = await news_service.news_get();
  res.status(200).json({ data: result });
  console.timeEnd("news");
};
