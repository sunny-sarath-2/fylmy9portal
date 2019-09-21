const express = require("express");
const router = express.Router();

const users_controller = require("../../controllers/users.controller");
router.get("/", users_controller.get_all_users);
router.post("/", users_controller.post_user);
router.put("/", users_controller.put_user);
router.delete("/:_id", users_controller.delete_user);

module.exports = router;
