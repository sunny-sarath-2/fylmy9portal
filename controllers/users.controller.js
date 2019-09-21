const users_service = require("../services/users.service");
const md5 = require("md5");

exports.get_all_users = async (req, res) => {
  let data = await users_service.get_all_users_service();
  res.status(200).json({ result: data, message: "list of all users" });
};

exports.post_user = async (req, res) => {
  req.body.password = md5(req.body.password);
  let result = await users_service.post_user_service(req.body);
  res.status(200).json({
    status: 200,
    result: result,
    message: "user successfully created"
  });
};

exports.put_user = async (req, res) => {
  let data = req.body;
  data.password = md5(data.password);
  console.log(data);
  let result = await users_service.put_user_service(data);
  res.status(200).json({ test: result });
};

exports.delete_user = async (req, res) => {
  console.log(req.params._id);
  let result = await users_service.delete_user_service(req.params._id);
  res.status(200).json({
    status: 200,
    result: result,
    message: "successfully deleted user"
  });
};
