//@desc post FEN
//@route POST /
//@access public 
const {CHESS_VALIDATOR_API,PORT} = require('../config')
const axios = require('axios')
const postFEN = async (req,res)=>{
    // console.log("The request body is : " , req.body)
    // res.status(200).json({message: "FEN is received"})
    try {
        // Call the C++ API on port 5005

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


const getFEN = async (req,res)=>{
    try {
        // Call the C++ API on port 5005
        const cppResponse = await axios.post(process.env.URL, {
            FEN: "3r3k/1pp2p1p/1p4pb/3NP3/2P2P2/1P6/P4RPP/3R2K1 b - - 0 23" 
        });
        let fen = cppResponse.data.PiecePositions ;
       // Return the C++ API response
        res.json({
            fen:cppResponse.data.PiecePositions
    
        });
    //    res.send(fen);
    } catch (error) {
        console.error('Error connecting to C++ API:', error.message);
        res.status(500).json({ error: 'Failed to connect to the C++ API' });
    }
}

module.exports = {postFEN, getFEN}


