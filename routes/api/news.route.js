let express = require("express");
let router = express.Router();

let news_controller = require("../../controllers/news.controller");

router.get("/", news_controller.news_get_all);
router.get("/:_id", news_controller.news_get_one);

module.exports = router;
