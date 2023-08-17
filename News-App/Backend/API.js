const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const {SECRET} = require("./middleware/auth.js");
const {sign} = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cors());


const adminSchema = mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema);



app.post('/signup', async (req,res)=>{
    const {username,password} = req.body;
    const admin = await Admin.findOne({username});
    if(admin){
        res.status(403).json({message: 'Admin already exists'});
    }
    else{
        const obj = {username:username, password: password};
        const newAdmin = new Admin(obj);
        await newAdmin.save();

        const token = sign({username, role:'admin'}, SECRET, {expires_in: '1h'});
        res.json({message: 'Admin created successfully', token});
    }
})