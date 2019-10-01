let express = require("express");
let router = express.Router();
let common = require("../../common/verifytoken");

const review_controller = require("../../controllers/review.controller");
router.get("/getall", review_controller.review_get_all);
router.get("/", review_controller.review_get_published);
router.get("/:_id", review_controller.review_get_one);
router.post("", review_controller.review_post); //, common.verify_token
router.put("", review_controller.review_put); //, common.verify_token
router.delete("/:_id", common.verify_token, review_controller.review_delete);
module.exports = router;
