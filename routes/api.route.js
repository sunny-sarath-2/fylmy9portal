let express = require("express");
let router = express.Router();

const review_api = require("./api/review.route");
router.use("/review", review_api);

const news_api = require("./api/news.route");
router.use("/news", news_api);

const users_api = require("./api/users.route");
router.use("/users", users_api);

const login_api = require("./api/login.route");
router.use("/login", login_api);

module.exports = router;
