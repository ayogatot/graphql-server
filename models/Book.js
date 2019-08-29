const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
  createdAt: String,
  updatedAt: String
});

module.exports = model("books", bookSchema);
