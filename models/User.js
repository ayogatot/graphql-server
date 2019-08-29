const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  address: String,
  createdAt: String,
  updateddAt: String
});

module.exports = model("users", userSchema);
