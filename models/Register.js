const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
