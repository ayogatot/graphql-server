require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// Setting Enviroment Variable for Mongo
const PORT = process.env.PORT;
const HOST = process.env.HOST;

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
mongoose.set("useCreateIndex", true);
