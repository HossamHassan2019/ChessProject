//@desc post FEN
//@route POST /
//@access public 
const axios = require('axios')
const postFEN = async (req,res)=>{
    // console.log("The request body is : " , req.body)
    // res.status(200).json({message: "FEN is received"})
    try {
        // Call the C++ API on port 5005
        const cppResponse = await axios.post('http://localhost:8080/set_message', {
            FEN: req.body.FEN 
        });

        // Return the C++ API response
        res.json({
            message: 'Node.js API successfully called C++ API',
            cppData: cppResponse.data
        });
    } catch (error) {
        console.error('Error connecting to C++ API:', error.message);
        res.status(500).json({ error: 'Failed to connect to the C++ API' });
    }
}

module.exports = {postFEN}