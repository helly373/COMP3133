// src/server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authMiddleware = require('./middleware/auth');

dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use our custom auth middleware to attach user info to req
app.use(authMiddleware);

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Pass the authenticated user (if any) into GraphQL context
    return { user: req.user };
  },
  formatError: (err) => {
    // Optionally customize error formatting
    return {
      message: err.message,
      locations: err.locations,
      path: err.path,
    };
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  connectDB();

  // default route for the home page
  app.get('/', (req, res) => {
    res.send("🚀 Employee Management System API is Live! Visit /graphql to access the GraphQL API.");
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
