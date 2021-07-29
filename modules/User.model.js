const mongoose = require("mongoose");

const userSchema = mongoose.Shema({
  name: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
