const article_model = require("../model/article.model");

exports.get_all_article = async () => {
  return await article_model.find({}).sort({ article_created_date: -1 });
};

exports.get_one_article = async _id => {
  return await article_model.findById(_id);
};

exports.create_article = async data => {
  data["created_date"] = new Date();
  let new_article_model = new article_model(data);
  return await new_article_model.save();
};

exports.update_article = async data => {
  let id = data._id;
  delete data._id;
  return await article_model.updateOne({ _id: id }, { $set: data });
};

exports.delete_article = async _id => {
  return await article_model.updateOne(
    { _id: _id },
    { $set: { status: false } }
  );
};

exports.get_many_by_id_service = async ids => {
  return await article_model
    .find({ $and: [{ _id: { $in: ids } }, { status: { $eq: true } }] })
    .sort({ review_created_date: -1 });
};
