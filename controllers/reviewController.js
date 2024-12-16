const Item = require("../models/items/itemModel");
const Review = require("../models/reviews/reviewModel");
const warpAsync = require("../utils/wrapAsync");

module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  let item = await Item.findById(id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  await newReview.save();
  item.reviews.push(newReview);
  await item.save();
  req.flash("success", "new review added succesfully!");
  res.redirect(`/shop/${id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  let item = await Item.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });
  let reviews = await Review.findByIdAndDelete(reviewId);
  req.flash("success", "review deleted succesfully!");
  res.redirect(`/shop/${id}`);
};
