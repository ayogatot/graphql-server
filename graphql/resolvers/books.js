const Book = require("../../models/Book");

module.exports = {
  Query: {
    getAllBooks: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
    getBookById: async (_, { bookId }) => {
      try {
        const book = await Book.findById(bookId);
        if (book) {
          return book;
        } else {
          return new Error("Book is not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
