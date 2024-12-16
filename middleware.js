const Review = require("./models/reviews/reviewModel");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.originalUrl = req.originalUrl;
    req.flash("error", "user must logged in!");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports.saveOrginalUrl = (req, res, next) => {
  if (req.session.originalUrl) {
    res.locals.originalUrl = req.session.originalUrl;
  }
  next();
};

module.exports.isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    req.flash("user not authorized");
    return res.redirect("/");
  }
  next();
};

module.exports.isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!res.locals.currentUser._id.equals(review.author._id)) {
    req.flash("error", "you cannot able to delete this review not authorized");
    res.redirect(`/shop/${id}`);
  }
  next();
};

module.exports.isPaid = async (req, res, next) => {
  console.log("request method ", req);
  next();
};
