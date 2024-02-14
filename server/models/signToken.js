const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretsshhhhh';

const signToken = (user) => {
  return jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
};

module.exports = {
  signToken
};
