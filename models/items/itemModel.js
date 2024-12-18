const mongoose = require("mongoose");
const Review = require("../reviews/reviewModel");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  category: {
    type: String,
    enum: ["electronics", "accessories", "home", "clothing"],
  },
});

itemSchema.post("findOneAndDelete", async (item) => {
  if (item) {
    await Review.deleteMany({ _id: { $in: item.reviews } });
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
