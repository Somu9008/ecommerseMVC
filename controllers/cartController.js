const Cart = require("../models/cart/cartModel");
const Item = require("../models/items/itemModel");
const User = require("../models/user/userModel");

module.exports.getAllCarts = async (req, res) => {
  let id = req.user._id;
  // let cartItems = await Cart.findById().populate({
  //   path: "items",
  //   populate: { path: "image" },
  // });

  let user = await User.findById(req.user._id).populate({
    path: "cartItems",
    populate: { path: "items" },
  });

  let cartItems = user.cartItems;

  console.log(cartItems);
  res.render("cart/cart.ejs", { cartItems });
};

module.exports.addToCart = async (req, res) => {
  let id = req.user._id;
  let user = await User.findById(id).populate({
    path: "cartItems",
    populate: { path: "items" },
  });
  let { itemId } = req.params;
  let newItem = await Item.findById(itemId);
  let cart = new Cart({
    quantity: 1,
  });
  cart.items = newItem;
  cart.user = req.user._id;

  for (let carts of user.cartItems) {
    if (carts.items.id === cart.items.id) {
      req.flash("error", "item already exist in cart");
      return res.redirect(`/shop/${itemId}`);
    }
  }
  // if (user.cartItems.includes(itemId)) {
  //   req.flash("error", "item already added to cart");
  //   return req.redirect(`/shop/${itemId}`);
  // }
  await cart.save();
  user.cartItems.push(cart);
  user.save();
  req.flash("success", "item added to cart!");
  res.redirect(`/shop/${itemId}`);
};

module.exports.updateCartinc = async (req, res) => {
  try {
    let { cartId, itemId } = req.params;
    let cart = await Cart.findById(cartId);
    cart.quantity += 1;
    await cart.save();
    res.redirect("/cart");
  } catch (error) {
    res.redirect("/cart");
    req.flash("error", error.message);
  }
};
module.exports.updateCartdec = async (req, res) => {
  try {
    let { cartId } = req.params;
    let cart = await Cart.findById(cartId);
    cart.quantity -= 1;
    await cart.save();
    res.redirect("/cart");
  } catch (error) {
    res.redirect("/cart");
    req.flash("error", error.message);
  }
};

module.exports.destroyCartItem = async (req, res) => {
  let { cartId } = req.params;
  let id = req.user._id;
  let userCartItemDeleted = await User.findByIdAndUpdate(id, {
    $pull: { cartItems: cartId },
  });
  await userCartItemDeleted.save();
  let cartItemdeleted = await Cart.findByIdAndDelete(cartId);
  req.flash("success", "cartitem deleted successfully!");
  res.redirect("/cart");
};
