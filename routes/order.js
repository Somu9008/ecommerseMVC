const express = require("express");
const {
  placeOrder,
  userOrders,
  orderList,
  getOrderDetailes,
  uodateIsDeliverd,
  destroyOrder,
  stripePayment,
} = require("../controllers/orderController");
const { isLoggedIn, isAdmin, isPaid } = require("../middleware");
const warpAsync = require("../utils/wrapAsync");
const Cart = require("../models/cart/cartModel");
const User = require("../models/user/userModel");
const Order = require("../models/order/orderModel");
const router = express.Router();

router.get("/shippingaddress", isLoggedIn, (req, res) => {
  let { address } = req.user;
  if (address.city) {
    return res.redirect("/ordersummery");
  }
  res.render("AddressAndPayment/shippingaddress.ejs");
});
router.get(
  "/ordersummery",
  isLoggedIn,
  warpAsync(async (req, res) => {
    let cartItems = await User.findById(req.user._id).populate({
      path: "cartItems",
      populate: { path: "items" },
    });
    res.render("AddressAndPayment/ordersummery.ejs", { cartItems });
  })
);

router.route("/orders").get(isLoggedIn, isPaid, warpAsync(userOrders));

router.route("/orders/checkout").post(isLoggedIn, warpAsync(placeOrder));

router.route("/orderlist").get(isLoggedIn, isAdmin, warpAsync(orderList));

// router.route("/orderpay").post(isLoggedIn, stripePayment);

router
  .route("/orderlist/:orderId")
  .get(isLoggedIn, isAdmin, warpAsync(getOrderDetailes))
  .put(isLoggedIn, isAdmin, warpAsync(uodateIsDeliverd))
  .delete(isLoggedIn, isAdmin, warpAsync(destroyOrder));

module.exports = router;
