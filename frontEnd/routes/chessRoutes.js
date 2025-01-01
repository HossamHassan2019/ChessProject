const express = require('express')
const router = express.Router();

const{postFEN , getFEN} = require("../controllers/chessController");


router.route('/fen').post(postFEN).get(getFEN);

module.exports = router;