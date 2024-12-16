const { defaults } = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  shoppingAddress: {
    city: { type: String, required: true },
    taluq: { type: String, required: true },
    state: { type: String, required: true },
    mobileno: { type: Number, required: true },
    dist: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    area: { type: String, required: true },
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 100,
  },
  ispaid: {
    type: String,
    default: "UnPaid",
  },

  paymentmethod: {
    type: String,
  },

  isdeliverd: {
    type: String,
    default: "order-placed",
  },

  orderDate: {
    type: Date,
  },

  deliveryDate: {
    type: Date,
    default: Date.now() + 7 * 24 * 60 * 60 * 1000,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
