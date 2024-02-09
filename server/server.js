const express = require('express');
const { ApolloServer } = require('@apollo/server');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Add crypto module

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

// Generate JWT secret
const generateJwtSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

// Set JWT secret in environment variable
process.env.JWT_SECRET = generateJwtSecret();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

// Add the middleware to your ApolloServer express instance
server.applyMiddleware({ app });

// Routes
app.post('/login', (req, res) => {
  // Perform authentication
  // Assuming authentication is successful, generate a JWT token
  const token = jwt.sign({ userId: 'exampleUserId' }, process.env.JWT_SECRET);
  res.json({ token });
});

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});
