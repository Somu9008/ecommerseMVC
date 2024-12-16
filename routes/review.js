const express = require("express");
const Item = require("../models/items/itemModel");
const Review = require("../models/reviews/reviewModel");
const warpAsync = require("../utils/wrapAsync");
const router = express.Router();
const { reviewschema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError");
const { isAuthor, isLoggedIn } = require("../middleware.js");
const {
  createReview,
  destroyReview,
} = require("../controllers/reviewController.js");

const validateReview = (req, res, next) => {
  let { error } = reviewschema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router.post(
  "/shop/:id/review",
  isLoggedIn,
  validateReview,
  warpAsync(createReview)
);

router.delete("/shop/:id/review/:reviewId", isAuthor, warpAsync(destroyReview));

module.exports = router;
