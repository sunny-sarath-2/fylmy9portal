const article_service = require("../services/article.service");
let news_service = require("../services/news.service");

exports.article_get_all = async (req, res) => {
  let data = await article_service.get_all_article();
  res.status(200).json({ test: data });
};

exports.article_get_one = async (req, res) => {
  let data = await article_service.get_one_article(req.params._id);
  res.json({ test: data });
};

exports.article_create_one = async (req, res) => {
  let data = await article_service.create_article(req.body);
  res.json({ test: data });
  let newsupdate = await news_service.news_post({
    reference: data._id,
    collection_name: "articles",
    created_date: new Date()
  });
};

exports.article_update_one = async (req, res) => {
  let data = await article_service.update_article(req.body);
  res.json({ test: data });
};

exports.article_delete_one = async (req, res) => {
  let data = await article_service.delete_article(req.params._id);
  res.json({ test: data });
};
