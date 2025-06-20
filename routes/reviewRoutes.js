const express = require("express");
const { getReviews, createReview } = require("../controllers/reviewController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);

module.exports = router;
