let express = require("express");
let router = express.Router();

let news_controller = require("../../controllers/news.controller");

router.get("/", news_controller.news_get_all);

module.exports = router;
