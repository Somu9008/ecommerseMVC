const User = require("../models/user/userModel");
const Order = require("../models/order/orderModel");
const Cart = require("../models/cart/cartModel");
const Item = require("../models/items/itemModel");
const { populate } = require("dotenv");
const { model } = require("mongoose");
const stripe = require("stripe")(
  "sk_test_51QGDZWKXfRVICuJkwki28AvqpfM0ooQPzwtPvOaEBAMHSlrYmeNpHjK29c5giMOTFOObqqwODhCY57IAHk5Y03gW00FvH6EoH2"
);

require("dotenv").config();

module.exports.userOrders = async (req, res) => {
  let { orderId, success } = req.query;
  let id = req.user._id;
  let user = await User.findById(id).populate({
    path: "order",
  });
  const orderedUser = await Order.find({
    user: { $in: user._id },
  })
    .populate({ path: "item", populate: { path: "items" } })
    .populate("user");
  console.log(orderedUser);

  res.render("orders/order.ejs", { orderedUser });
};

module.exports.placeOrder = async (req, res) => {
  let { area, city, taluq, state, dist, mobileno, country, pincode } =
    req.user.address;

  let { paymentmethod } = req.body;
  if (paymentmethod === "cod") {
    const user = await User.findById(req.user._id).populate({
      path: "order",
      populate: { path: "user", path: "item" },
    });

    const cartItemsTotalPrice = await Cart.find({
      _id: { $in: user.cartItems },
    }).populate("items");

    let TotalAmount = 0;
    for (let orderItem of cartItemsTotalPrice) {
      TotalAmount += orderItem.quantity * orderItem.items.price + 10;
    }

    const newOrder = new Order({
      user: req.user._id,
      item: user.cartItems,
      totalPrice: TotalAmount,
      shoppingAddress: {
        city,
        mobileno,
        dist,
        country,
        area,
        taluq,
        state,
        pincode,
      },
      paymentmethod,
      orderDate: Date.now(),
      deliveryDate: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    if (user.cartItems.length !== 0) {
      await newOrder.save();
      user.order.push(newOrder);
    } else {
      req.flash("error", "please add some cart to make order");
      return res.redirect("/cart");
    }

    await User.findByIdAndUpdate(req.user._id, { cartItems: [] });

    await user.save();

    req.flash("success", "ordered successfuly");
    res.redirect(`/orders`);
  } else if (paymentmethod === "stripe" || paymentmethod === "debit") {
    let { area, city, taluq, state, dist, mobileno, country, pincode } =
      req.user.address;

    const user = await User.findById(req.user._id).populate({
      path: "order",
      populate: { path: "user", path: "item" },
    });
    const cartItemsTotalPrice = await Cart.find({
      _id: { $in: user.cartItems },
    }).populate("items");

    let TotalAmount = 0;
    for (let orderItem of cartItemsTotalPrice) {
      TotalAmount += orderItem.quantity * orderItem.items.price + 10;
    }

    const newOrder = new Order({
      user: req.user._id,
      item: user.cartItems,
      totalPrice: TotalAmount,
      shoppingAddress: {
        city,
        mobileno,
        dist,
        country,
        area,
        taluq,
        state,
        pincode,
      },
      paymentmethod,
      orderDate: Date.now(),
      deliveryDate: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    // let itemsarray = cartItemsTotalPrice.map((item) => {
    //   return item.items._id;
    // });

    // const itemsinfo = await Item.find({
    //   _id: {
    //     $in: itemsarray,
    //   },
    // });
    // console.log(itemsinfo);

    try {
      let line_items = cartItemsTotalPrice.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.items.title,
          },
          unit_amount: item.items.price * 100,
        },
        quantity: item.quantity,
      }));

      console.log("all carts", line_items);
      const session = await stripe.checkout.sessions.create({
        success_url: `http://localhost:5000/orders?success=true?orderId=${newOrder.id}`,
        cancel_url: "http://localhost:5000/cart?success=false",
        line_items,
        mode: "payment",
      });

      console.log(session);

      if (user.cartItems.length !== 0) {
        await newOrder.save();
        user.order.push(newOrder);
      } else {
        req.flash("error", "please add some cart to make order");
        return res.redirect("/cart");
      }
      await User.findByIdAndUpdate(req.user._id, { cartItems: [] });
      await user.save();
      req.flash("success", "ordered successfuly");
      return res.redirect(session.url);
    } catch (error) {}
  }
};

module.exports.orderList = async (req, res) => {
  const allOrders = await Order.find()
    .populate("user")
    .populate({ path: "item", populate: { path: "items" } });

  // console.log("totalcartPrice", cartItemsTotalPrice);

  // console.log(allOrders);
  res.render("orders/allOrder.ejs", { allOrders });
};

module.exports.getOrderDetailes = async (req, res) => {
  let { orderId } = req.params;
  let orderDetailes = await Order.findById(orderId)
    .populate({
      path: "item",
      populate: { path: "items" },
    })
    .populate("user");

  // console.log(orderDetailes);
  res.render("orders/orderDetails.ejs", { orderDetailes });
};
module.exports.uodateIsDeliverd = async (req, res) => {
  let { orderId } = req.params;
  let orderDetailes = await Order.findById(orderId)
    .populate({
      path: "item",
      populate: { path: "items" },
    })
    .populate("user");

  // if (orderDetailes.paymentmethod === "cod") {
  //   orderDetailes.ispaid = req.body.ispaid;
  //   // orderDetailes.isdeliverd = req.body.isdeliverd;
  //   await orderDetailes.save();
  //   req.flash("success", "order updated succesfuly");
  //   res.redirect("/orderlist");
  // }

  orderDetailes.ispaid = req.body.ispaid || orderDetailes.ispaid;

  orderDetailes.isdeliverd = req.body.isdeliverd || orderDetailes.isdeliverd;
  await orderDetailes.save();

  req.flash("success", "order updated succesfuly");
  res.redirect("/orderlist");
};

module.exports.destroyOrder = async (req, res) => {
  let { orderId } = req.params;
  let order = await Order.findById(orderId);
  if (order.ispaid === "paid" && order.isdeliverd === "delivered") {
    let deletedOrder = await Order.findByIdAndDelete(orderId);
    let deleteduserOrder = await User.findByIdAndUpdate(orderId, {
      $pull: { order: orderId },
    });

    req.flash("success", "order deleted");
    res.redirect("/orderlist");
  } else {
    req.flash("error", "item was not delevered you can deleteafter deliverd");
    res.redirect("/orderlist");
  }
};
