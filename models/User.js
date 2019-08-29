const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateddAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("users", userSchema);
