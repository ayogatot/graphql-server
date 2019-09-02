const Book = require("../../models/Book");
const { checkAuth } = require("../../helpers");

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
  },
  Mutation: {
    createBook: async (_, { title }, context) => {
      const isUser = checkAuth(context);

      const newBook = new Book({
        title,
        author: isUser.username,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      const book = await newBook.save();

      return book;
    },

    deleteBookById: async (_, { bookId }, context) => {
      try {
        const isUser = checkAuth(context);
        const book = await Book.findById(bookId);

        if (isUser.username === book.author) {
          await book.delete();
          return "Book has been deleted";
        } else {
          return "This is not your book !";
        }
      } catch (error) {
        return new Error(error);
      }
    }
  }
};
