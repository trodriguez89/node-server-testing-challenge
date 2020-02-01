const express = require("express");

const Jedis = require("../jedis/jedi-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "API IS ALIVE!"})
});

// server.get("/api/jedis", (req, res) => {
    
// })