const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; 

const app = express();
app.use(express.static('public')); 

app.use(express.json())

app.listen(port , ()=>{
    console.log('server is ready !!! ' );
});

// app.get('/getFen', (req, res) => {
//     const fen = "4rr1k/1ppq2bp/6p1/p2B4/P1Pp1P2/1P1n2P1/1B5P/R4RK1"; // Example FEN
//     res.json({ fen });
//   });

app.use("/api" , require("./routes/chessRoutes"))

