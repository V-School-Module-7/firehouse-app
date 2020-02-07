const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  // In case we need to distinguish types of users in the future
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Hook
userSchema.pre(`save`, function(next) {
  const user = this;
  // make sure its the first time a password is being saved
  if (!user.isModified(`password`)) return next();
  // Encrypt password
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    // overwrite user's plain text password with hashed password
    user.password = hash;
    // Move on to the .save() in the "signup route"
    next();
  });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.methods.withoutPassword = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);
