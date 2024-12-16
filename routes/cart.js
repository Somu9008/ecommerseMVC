const express = require("express");

const {
  getAllCarts,
  addToCart,
  destroyCartItem,
  updateCartinc,
  updateCartdec,
} = require("../controllers/cartController");
const { isLoggedIn } = require("../middleware");
const warpAsync = require("../utils/wrapAsync.js");
const User = require("../models/user/userModel.js");
const router = express.Router();

router.route("/cart").get(isLoggedIn, warpAsync(getAllCarts));

router.route("/cart/:itemId").post(warpAsync(addToCart));

router
  .route("/item/:itemId/cart/:cartId")
  .delete(isLoggedIn, warpAsync(destroyCartItem));

router
  .route("/item/:itemId/cart/:cartId/inc")
  .put(isLoggedIn, warpAsync(updateCartinc));

router
  .route("/item/:itemId/cart/:cartId/dec")
  .put(isLoggedIn, warpAsync(updateCartdec));

module.exports = router;
