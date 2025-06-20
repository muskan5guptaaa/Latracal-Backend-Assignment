const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/:id", auth, getUserProfile);
router.put("/:id", auth, updateUserProfile);

module.exports = router;
