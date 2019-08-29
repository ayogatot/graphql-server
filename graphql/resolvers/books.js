const Book = require("../../models/Book");

module.exports = {
  Query: {
    getBook: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
