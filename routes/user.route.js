const express = require("express");
const allUser = require("../controllers/user.controller");
const router = express.Router();

router.route("/random").get(allUser.randomUser);
router.route("/all").get(allUser.getAll);
router.route("/save").post(allUser.userPost);
router.route("/update/:id").patch(allUser.userSingleDataUpdate);
router.route("/delete-user/:id").delete(allUser.deleteSingleUser);

module.exports = router;
