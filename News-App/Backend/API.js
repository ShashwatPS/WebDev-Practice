import mongoose from "mongoose";
import cors from "cors";
import { SECRET } from "./middleware/auth.js";
import { sign } from "jsonwebtoken";
import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(cors());


const adminSchema = mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

mongoose.connect("mongodb+srv://ShashwatPS:s@cluster0.1alkv6j.mongodb.net/News", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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

        const token = sign({username, role:'admin'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'Admin created successfully', token});
    }
})

app.listen(3000);