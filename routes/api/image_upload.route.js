let express = require("express");
let router = express.Router();

// let login_controller = require("../../controllers/login.controller");

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    url: "https://example.com/images/foo.jpg"
  });
});

module.exports = router;
