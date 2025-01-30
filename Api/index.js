import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
 
dotenv.config();

mongoose.connect("mongodb+srv://dhass6455:dhass6455@cluster0.yf3ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
    console.log("Connected to data base")
}).catch((err)=>{
    console.log("Error while connecting to database")
});

const app = express();

app.listen(3000,() =>{
    console.log("Server is running");
})