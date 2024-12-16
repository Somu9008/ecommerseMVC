const Item = require("../models/items/itemModel");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {
  let AllItems = await Item.find();
  res.render("items/index.ejs", { AllItems });
};

module.exports.newItemForm = (req, res) => {
  res.render("items/new.ejs");
};

module.exports.createNewItem = async (req, res) => {
  try {
    console.log(req.file);
    let url = req.file.path;
    let filename = req.file.filename;
    let item = new Item(req.body.item);
    item.image = { url, filename };
    await item.save();
    req.flash("success", "new item added succesfully!");
    res.redirect("/shop");
  } catch (error) {
    throw new ExpressError(400, error);
  }
};

module.exports.showSingleItem = async (req, res) => {
  let { id } = req.params;
  let item = await Item.findById(id).populate({
    path: "reviews",
    populate: { path: "author" },
  });
  res.render("items/singleItem.ejs", { item });
};

module.exports.editItemForm = async (req, res) => {
  let { id } = req.params;
  let item = await Item.findById(id);
  res.render("items/Edit.ejs", { item });
};

module.exports.editItem = async (req, res) => {
  let { id } = req.params;

  let item = await Item.findByIdAndUpdate(id, req.body.item);

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    item.image = { url, filename };
    await item.save();
  }

  req.flash("success", "item has been updated succesfully!");
  res.redirect(`/shop/${item.id}`);
};

module.exports.destroyItem = async (req, res) => {
  let { id } = req.params;
  await Item.findByIdAndDelete(id);
  req.flash("success", " item deleted succesfully!");
  res.redirect("/shop");
};
