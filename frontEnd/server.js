const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; 
const app = express(); 
app.use(express.json())

app.listen(port , ()=>{
    console.log('server is ready !!! ' );
});

app.use("/" , require("./routes/chessRoutes"))
