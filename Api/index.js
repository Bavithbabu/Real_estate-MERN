// import express from 'express';
// import mongoose from 'mongoose';
// import userRouter from '../Routes/user.route.js';
// import dotenv from "dotenv";
 
// dotenv.config();

// mongoose.connect("mongodb+srv://dhass6455:dhass6455@cluster0.yf3ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
//     console.log("Connected to data base")
// }).catch((err)=>{
//     console.log("Error while connecting to database")
// });

// const app = express();

// app.listen(3000,() =>{
//     console.log("Server is running");
// })
 

// app.use("/api/user",userRouter);
 // filepath: /c:/Users/dhass/Desktop/Desktop/Real estate/Api/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './Routes/user.route.js'; // Ensure the path is correct
import authRouter from './Routes/auth.route.js';

dotenv.config(); // Load environment variables

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dhass6455:dhass6455@cluster0.yf3ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error while connecting to database:", err);
  });

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend
  credentials: true,
}));

// Routes
app.use("/api/user", userRouter); // Use lowercase for route prefix
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});