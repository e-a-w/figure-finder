require("./db/config");
const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  app = express();

// GraphQL
const { graphqlHTTP } = require("express-graphql"),
  schema = require("./schema/schema");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === "production") {
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
