require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const bookModels = require("./models/Book");

// Setting Enviroment Variable for Mongo
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
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

const resolvers = {
  Query: {
    getBook: async () => {
      try {
        const books = await bookModels.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(HOST, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: PORT || 5000 });
  })
  .then(res => {
    console.log("server running");
  });
