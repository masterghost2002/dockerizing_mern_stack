const express = require("express");
const server = express();
const cors = require('cors');
server.use(cors());
const PORT = 5000;
server.get('/', (req, res)=>{
    const RandomCount = Math.floor((Math.random()*999+1000));
    res.status(200).json({message:"Its a success request", count:RandomCount})
});
server.listen(PORT, ()=>console.log("Server is start"));