const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("books", bookSchema);
