import User from "../models/user.models.js";
// import bcrypt from 'bcryptjs';
import bcrypt from 'bcryptjs';


const signup = async (req,res)=>{
    const {username,email,password} = req.body;
    const hashpassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password : hashpassword})

    try{
        await newUser.save();
        res.status(201).json('User is created successfully go check in the DB');

    }catch(error){
        res.status(500).json(error.message);
    }
}

export default signup;