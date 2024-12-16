const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
