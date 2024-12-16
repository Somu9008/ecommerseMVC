const express = require("express");
const Item = require("../models/items/itemModel");
const warpAsync = require("../utils/wrapAsync");
const { itemSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, isAdmin } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudinaryConfig");
const upload = multer({ storage });

const {
  index,
  newItemForm,
  createNewItem,
  showSingleItem,
  editItemForm,
  editItem,
  destroyItem,
} = require("../controllers/itemControllers");
const router = express.Router();

const validateItem = (req, res, next) => {
  let { error } = itemSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router
  .route("/shop")
  .get(warpAsync(index))
  .post(
    isLoggedIn,
    isAdmin,
    upload.single("item[image]"),
    validateItem,
    warpAsync(createNewItem)
  );

router.route("/shop/category").post(async (req, res) => {
  let { tname } = req.body;
  let AllItems = await Item.find({ title: tname });
  res.render("items/index.ejs", { AllItems });
});

router.route("/shop/category/:cname").get(async (req, res) => {
  let { cname } = req.params;
  let AllItems = await Item.find({ category: cname });
  res.render("items/index.ejs", { AllItems });
});

router.get("/shop/new", isLoggedIn, newItemForm);

router
  .route("/shop/:id")
  .get(warpAsync(showSingleItem))
  .put(
    isLoggedIn,
    isAdmin,
    upload.single("item[image]"),
    validateItem,
    warpAsync(editItem)
  )
  .delete(isLoggedIn, isAdmin, warpAsync(destroyItem));
router.get("/shop/:id/edit", isLoggedIn, isAdmin, warpAsync(editItemForm));

module.exports = router;
