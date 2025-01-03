// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  FUN_CHESS_API: process.env.FUN_CHESS_API,
  CHESS_VALIDATOR_API: process.env.CHESS_VALIDATOR_API,
  PORT: process.env.PORT
};

