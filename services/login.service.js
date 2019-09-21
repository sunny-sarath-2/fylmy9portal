const user_model = require("../model/user.model");

exports.login_verify_service = async ({ username, password }) => {
  return await user_model.aggregate([
    {
      $match: {
        username,
        password,
        status: true
      }
    }
  ]);
};
