const { types, number, string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const Cart = require("../cart/cartModel");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      default:
        "https://static.vecteezy.com/ti/vetor-gratis/p2/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
    },
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },

  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  address: {
    city: String,
    dist: String,
    state: String,
    area: String,
    country: String,
    mobileno: Number,
    taluq: String,
    pincode: Number,
  },
});

userSchema.plugin(passportLocalMongoose);
userSchema.post("findOneAndDelete", async (user) => {
  if (user) {
    await Cart.deleteMany({ _id: { $in: user.cartItems } });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
