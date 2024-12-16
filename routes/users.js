const express = require("express");
const router = express.Router();
const User = require("../models/user/userModel.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const { saveOrginalUrl, isLoggedIn, isAdmin } = require("../middleware");
const warpAsync = require("../utils/wrapAsync.js");
const Item = require("../models/items/itemModel.js");
const multer = require("multer");
const { storage } = require("../cloudinaryConfig");
const upload = multer({ storage });
const {
  signUpForm,
  loginForm,
  signUpUser,
  loginUser,
  logoutUser,
  allUser,
  updateUser,
  deleteUser,
  userProfile,
  updateCurrentUser,
} = require("../controllers/userControllers.js");

router.route("/signup").get(signUpForm).post(wrapAsync(signUpUser));
router
  .route("/login")
  .get(loginForm)
  .post(
    saveOrginalUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    warpAsync(loginUser)
  );

router.post("/logout", logoutUser);

router.get("/user", isLoggedIn, isAdmin, allUser);

router
  .route("/user/profile")
  .get(userProfile)
  .put(isLoggedIn, upload.single("image"), warpAsync(updateCurrentUser));

router.route("/user/shippingaddress").post(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { city, area, taluq, state, dist, country, mobileno, pincode } =
      req.body;
    let user = await User.findById(req.user._id);
    user.address = {
      city,
      area,
      taluq,
      state,
      dist,
      country,
      mobileno,
      pincode,
    };
    await user.save();
    console.log(req.user);
    res.redirect("/ordersummery");
  })
);

router.route("/shippingaddressedit").get(isLoggedIn, async (req, res) => {
  let user = await User.findById(req.user._id);
  let userAddress = user.address;
  res.render("AddressAndPayment/shippingaddressedit.ejs", { userAddress });
});

router
  .route("/user/:id")
  .put(isLoggedIn, isAdmin, wrapAsync(updateUser))
  .delete(isLoggedIn, isAdmin, warpAsync(deleteUser));

module.exports = router;
