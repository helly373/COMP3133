const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const dotenv = require("dotenv");
dotenv.config();

// MongoDB Atlas Connection
const mongodb_atlas_url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_atlas_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to DB: ${error.message}`);
  }
};

const app = express();
app.use(express.json());
app.use("*", cors());

// Set up Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Start Express Server
  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT || 2001}${
        server.graphqlPath
      }`
    );
    connectDB();
  });
}

startServer();