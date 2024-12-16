if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const Item = require("./models/items/itemModel");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const User = require("./models/user/userModel.js");
const flash = require("connect-flash");

const ExpressError = require("./utils/ExpressError.js");
var methodOverride = require("method-override");

let store = MongoStore.create({
  mongoUrl:
    "mongodb+srv://somu2001:somu2001@cluster0.lqzzx.mongodb.net/ecommerse",
  crypto: {
    secret: process.env.SESSEION_SECRETE,
  },
  touchAfter: 24 * 3600,
});

const sessionOptions = {
  secret: process.env.SESSEION_SECRETE,
  store,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(methodOverride("_method"));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const itemRoutes = require("./routes/items.js");
const reviewRoutes = require("./routes/review.js");
const userRoutes = require("./routes/users.js");
const cartRoutes = require("./routes/cart.js");
const orderRoutes = require("./routes/order.js");
const aboutRoutes = require("./routes/about.js");
const contactRoutes = require("./routes/contact.js");

async function main() {
  await mongoose.connect(
    "mongodb+srv://somu2001:somu2001@cluster0.lqzzx.mongodb.net/ecommerse"
  );
}

main().then(() => {
  console.log("connected succesfuly :)");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", ejsMate);

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req?.user;
  // res.locals.userCartItems = req.session;
  console.log(req.session.Session);
  next();
});

app.get("/", (req, res) => {
  res.render("items/home.ejs");
});

app.use("/", itemRoutes);
app.use("/", reviewRoutes);
app.use("/", userRoutes);
app.use("/", cartRoutes);
app.use("/", orderRoutes);
app.use("/", aboutRoutes);
app.use("/", contactRoutes);

app.all("*", (req, res) => {
  throw new ExpressError(404, "page not found");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.status(status).render("items/Error.ejs", { message });
});

let port = 5000 || 10000;

app.listen(port, () => {
  console.log("this server port is running under ", port);
});
