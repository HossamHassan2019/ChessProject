//@desc post FEN
//@route POST /
//@access public 
const {CHESS_VALIDATOR_API,PORT} = require('../config')
const axios = require('axios')
const postFEN = async (req,res)=>{
    try {
        // Call the C++ API on port 5005

        //FEN: 8/1p2k3/3p4/4p3/p1r1P2P/P1P1qP2/1P6/1K1R4 w - - 0 36

        const cppResponse = await axios.post(CHESS_VALIDATOR_API, {
            FEN: req.body.FEN 
        });
        let fen = cppResponse.data.PiecePositions ;

       

        // Return the C++ API response
        res.json({
            message: 'Node.js API successfully called C++ API',
            fen:cppResponse.data.PiecePositions     

        });
    } catch (error) {
        console.error('Error connecting to C++ API:', error.message);
        res.status(500).json({ error: 'Failed to connect to the C++ API' });
    }
}




module.exports = {postFEN}


