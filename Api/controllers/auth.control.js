import User from "../models/user.models.js";
// import bcrypt from 'bcryptjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req,res)=>{
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

// export const signin = async (req , res , next) =>{
//     const {email,password} = req.body;
//     console.log({email, password});
//     try{
//         const validUser = await User.findOne({email});
//         if(!validUser) return next(errorHandler(404,'User not found'));
//         const validpassword = bcrypt.compareSync(password,validUser.password);
//         if (!validpassword) return next(errorHandler(401,'Wrong cridentials'));
//         const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
//         const {password: pass, ...rest } = validUser._doc;
//         res
//             .cookie('access_token',token,{httpOnly:ture})
//             .status(200)
//             .json(rest);
//     }catch(error){
//         next(error);
//     }
// }

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        const error = new Error('User not found');
        error.statusCode = 404;
        return next(error);
      }
      const validpassword = bcrypt.compareSync(password, validUser.password);
      if (!validpassword) {
        const error = new Error('Wrong credentials');
        error.statusCode = 401;
        return next(error);
      }
      const token = jwt.sign({ id: validUser._id }, "RENU MADAM");
      const { password: pass, ...rest } = validUser._doc;
      console.log("Success.....");
      res
        .cookie('access_token', token, { httpOnly: true }) // Fixed typo here
        .status(200)
        .json(rest);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

// export default signin;
// export default signup;