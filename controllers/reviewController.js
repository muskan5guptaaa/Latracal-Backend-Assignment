const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  const { bookId } = req.query;
  const reviews = await Review.find({ bookId }).populate("userId", "username");
  res.json(reviews);
};

exports.createReview = async (req, res) => {
  const review = new Review({ ...req.body, userId: req.body.bookId });
  await review.save();
  res.status(201).json(review);
};
