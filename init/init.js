const mongoose = require("mongoose");
const Item = require("../models/items/itemModel");
const AllItems = require("../data");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerse");
}

main().then(() => {
  console.log("connected seccessfuly");
});

async function alldata() {
  await Item.insertMany(AllItems);
}

alldata();
