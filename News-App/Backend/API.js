const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());


const adminSchema = mongoose.Schema({
    username: String,
    password: String,
});

app.post('/signup', (req,res)=>{
    const {username,password} = req.body;
    
})