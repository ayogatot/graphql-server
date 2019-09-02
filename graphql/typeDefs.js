const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
module.exports = gql`
  type Books {
    id: ID!
    title: String!
    author: String!
    createdAt: String!
    updatedAt: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getAllBooks: [Books]
    getBookById(bookId: ID!): Books
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createBook(title: String!): Books
    deleteBookById(bookId: ID!): String
  }
`;
