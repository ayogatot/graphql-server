require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

// Setting Enviroment Variable for Mongo
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello World"
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
