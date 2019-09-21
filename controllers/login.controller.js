const md5 = require("md5");
const login_service = require("../services/login.service");
const jwt = require("jsonwebtoken");

exports.verify_user_controller = async (req, res) => {
  req.body.password = md5(req.body.password);
  let result = await login_service.login_verify_service(req.body);
  jwt.sign(
    {
      data: result
    },
    "secret",
    { expiresIn: "1h" },
    (err, token) => {
      res.status(200).json({
        token: token,
        status: 200,
        result: result,
        message: "successfully logged in"
      });
    }
  );
};
