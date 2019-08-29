const { model, Schema } = require("mongoose");

const bookSchema = {
  title: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateddAt: {
    type: Date,
    default: Date.now()
  }
};

module.exports = model("books", bookSchema);
