const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
module.exports = gql`
  type books {
    id: ID!
    title: String!
    author: String!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getBook: [books]
  }
`;
