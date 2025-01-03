const express = require('express');
const { PORT } = require('./config');
const port = PORT || 5000; 

const app = express();
app.use(express.static('public')); 

app.use(express.json())

app.listen(port , ()=>{
    console.log('server is ready !!! ' );
});

app.use("/api" , require("./routes/chessRoutes"))

