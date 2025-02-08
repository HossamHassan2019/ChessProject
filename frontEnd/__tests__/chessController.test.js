

// Import the function to test
const { getFEN, postFEN } = require('../controllers/chessController'); // Adjust the path
const { CHESS_VALIDATOR_API } = require('../config'); // Adjust the path
const axios = require('axios');

// Mock axios
jest.mock('axios');





describe("postFEN testing " ,() =>{
  it("positive response" , async () => {
    const mockResponse = {
      data: {
        PiecePositions: "3r3k/1pp2p1p/1p4pb/3NP3/2P2P2/1P6/P4RPP/3R2K1",
        sent_message: "3r3k/1pp2p1p/1p4pb/3NP3/2P2P2/1P6/P4RPP/3R2K1 b - - 0 23",
        status: "success"
      }
    };

    const req = {
      body:{
        FEN: "3r3k/1pp2p1p/1p4pb/3NP3/2P2P2/1P6/P4RPP/3R2K1 b - - 0 23"
      }
    }

    const res = {
      json: jest.fn()
    }

    axios.post.mockResolvedValue(mockResponse);
    await postFEN(req,res); 

    expect(res.json).toHaveBeenCalledWith({
        message: 'Node.js API successfully called C++ API',
        fen:mockResponse.data.PiecePositions    
    })
  })

  it("Negative response" , async () => {
   
    const req = {
      body:{
        FEN: "3r3k/1pp2p1p/1p4pb/3NP3/2P2P2/1P6/P4RPP/3R2K1 b - - 0 23"
      }
    }

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    }
    
    axios.post.mockRejectedValue(new Error('Network error'));
    await postFEN(req,res); 

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to connect to the C++ API' })


  })

})

