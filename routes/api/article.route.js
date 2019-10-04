let express = require("express");
let router = express.Router();

let article_controller = require("../../controllers/article.controller");

router.get("/", article_controller.article_get_all);
router.get("/:_id", article_controller.article_get_one);
router.post("/", article_controller.article_create_one);
router.put("/", article_controller.article_update_one);
router.delete("/:_id", article_controller.article_delete_one);
module.exports = router;
