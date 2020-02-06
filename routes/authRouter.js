const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Signup, Login
// Authenticate the user
// Create and send a token

authRouter.post(`/signup`, (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (user) {
      res.status(400);
      return next(new Error(`That username is already taken.`));
    }

    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      return res
        .status(201)
        .send({ token: token, user: savedUser.withoutPassword() });
    });
  });
});

authRouter.post(`/login`, (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (!user) {
      res.status(403);
      return next(new Error(`Username and/or password is incorrect`));
    }

    user.checkPassword(req.body.password, (err, match) => {
      if (err) {
        res.status(500);
        return next(err);
      } else if (!match) {
        res.status(401);
        return next(new Error("Username and/or Password is incorrect"));
      }

      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res
        .status(200)
        .send({ token: token, user: user.withoutPassword(), success: true });
    });
  });
});

module.exports = authRouter;
