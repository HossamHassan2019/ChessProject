const express = require('express')
const router = express.Router();


const{postFEN } = require("../controllers/chessController");


router.route('/fen').post(postFEN);

module.exports = router;