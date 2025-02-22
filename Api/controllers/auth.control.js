import User from "../models/user.models.js";
// import bcrypt from 'bcryptjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const signup = async (req,res)=>{
    const {username,email,password} = req.body;
    const hashpassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password : hashpassword});

    try{
        await newUser.save();
        res.status(201).json('User is created successfully go check in the DB');

    }catch(error){
        res.status(500).json(error.message);
    }
}

export  const signin = async(req,res,next) =>{
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'User not found'));
        const validpassword = bcryptjs.comparesync(password,validUser.password);
        if (!validpassword) return next(errorHandler(401,'wrong cridentials'));
        const token = jwt.sign({id:validuser._id},process.env.JWT_SECRET);
        const {password: pass, ...rest } = validUser._doc;
        res
            .cookie('access_token',token,{httpOnly:ture})
            .status(200)
            .json(validUser);
    }catch(error){
        next(error);
    }
}

export default signup;