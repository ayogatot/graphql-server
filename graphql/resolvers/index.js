const bookResolver = require("./books");
const userResolver = require("./users");
const orderResolver = require("./orders");

module.exports = {
  Query: {
    ...bookResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...bookResolver.Mutation
  }
};
