const users_model = require("../model/user.model");

exports.get_all_users_service = async () => {
  return await users_model.find();
};

exports.post_user_service = data => {
  let new_user = new users_model(data);
  return new_user.save();
};

exports.put_user_service = async data => {
  let id = data._id;
  delete data._id;
  return await users_model.updateOne({ _id: id }, { $set: data });
};

exports.delete_user_service = async id => {
  return await users_model.updateOne({ _id: id }, { $set: { status: false } });
};
