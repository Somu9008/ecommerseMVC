const Item = require("../models/items/itemModel");
const User = require("../models/user/userModel");

module.exports.signUpForm = (req, res) => {
  res.render("user/signup.ejs");
};

module.exports.loginForm = (req, res) => {
  res.render("user/login.ejs");
};

module.exports.signUpUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let trimedUser = username?.trim();
    let trimedEmail = email?.trim();
    let newUser = new User({
      username: trimedUser,
      email: trimedEmail,
    });
    let user = await User.register(newUser, password);

    await user.save();
    req.login(user, (err) => {
      if (err) {
        return next(err);
      } else {
        req.flash("success", "user registerd succesfully");
        res.redirect("/");
      }
    });
  } catch (error) {
    req.flash("error", error.message);
    // throw new ExpressError(404, error);
    res.redirect("/signup");
  }
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "logged in successfully!");
  let originalUrl = res.locals.originalUrl ? res.locals.originalUrl : "/";
  let user = await User.findOne({ user: req.user.id });
  if (!user) {
    return res.status(404).json({ error: "No user Found" });
  } else {
    res.redirect(originalUrl);
  }
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/shop");
      req.flash("success", "user log out successfully");
    }
  });
};

module.exports.allUser = async (req, res) => {
  let users = await User.find();
  res.render("user/allUser.ejs", { users });
};

module.exports.updateUser = async (req, res, next) => {
  let { id } = req.params;
  let { username, email } = req.body;
  let trmedUser = username?.trim();
  let trmedEmail = email?.trim();
  let user = await User.findById(id);
  user.username = trmedUser || user.username;
  user.email = trmedEmail || user.email;

  // console.log(req.body.isAdmin);

  if (req.body.isAdmin === "true") {
    console.log("true");
    user.isAdmin = "true" || Boolean(user.isAdmin);
  } else if (req.body.isAdmin === "false") {
    console.log("false");
    user.isAdmin = "false" || Boolean(user.isAdmin);
  }

  await user.save();
  req.flash("success", "user credentials updated successfully");
  res.redirect(`/user`);
};

module.exports.deleteUser = async (req, res) => {
  let { id } = req.params;
  let user = await User.findByIdAndDelete(id);
  req.flash("success", `${user.username} deleted succesfuly!`);
  res.redirect("/user");
};

module.exports.userProfile = (req, res) => {
  res.render("user/profile.ejs");
};

module.exports.updateCurrentUser = async (req, res) => {
  let { username, email } = req.body;

  let id = res.locals.currentUser._id;
  let user = await User.findById(id);
  let trimedUser = username?.trim();
  let trimedEmail = email?.trim();
  user.username = trimedUser;
  user.email = trimedEmail;
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    user.image = { url };
  }

  console.log("helow", user.password);

  if (req.body.password) {
    user.password = req.body.password;
  }
  console.log(user);
  await user.save();
  req.login(user, (err) => {
    if (err) {
      return next(err);
    } else {
      req.flash("success", "user updated successfully");
      res.redirect("/user/profile");
    }
  });
};
