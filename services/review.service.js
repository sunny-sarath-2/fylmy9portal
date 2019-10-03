let review_model = require("../model/reviews.model");

exports.get_all_service = async () => {
  return await review_model.find().sort({ review_created_date: -1 });
};
exports.get_published_service = async () => {
  return await review_model
    .find({ status: true })
    .sort({ review_created_date: -1 });
};
exports.get_one_review_service = async (id, callback) => {
  review_model.findById(id, callback);
};

exports.put_one_service = async data => {
  let id = data._id;
  delete data._id;
  return await review_model.updateOne({ _id: id }, { $set: data });
};

exports.post_service = async data => {
  data["review_created_date"] = new Date();
  var new_review = new review_model(data);
  return await new_review.save();
};

exports.delete_Service = async reference_id => {
  return await review_model.updateOne(
    { _id: reference_id },
    { $set: { status: false } }
  );
};
exports.get_many_by_id_service = async ids => {
  return await review_model
    .find({ $and: [{ _id: { $in: ids } }, { status: { $eq: true } }] })
    .sort({ review_created_date: -1 });
};
