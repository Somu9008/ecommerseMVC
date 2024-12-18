const mongoose = require("mongoose");
const Item = require("../models/items/itemModel");
const AllItems = require("../data");

async function main() {
  await mongoose.connect(
    "mongodb+srv://somu2001:somu2001@cluster0.lqzzx.mongodb.net/ecommerse"
  );
}

main().then(() => {
  console.log("connected seccessfuly");
});

async function alldata() {
  await Item.insertMany(AllItems);
}

alldata();
