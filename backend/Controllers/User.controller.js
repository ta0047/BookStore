import User from '../Models/User.model.js';
import bcrypt from 'bcrypt';

export const getUser=async (req,res) => {
    try {
        const user=await User.find();
        res.status(200).json(user)
    } catch (error) {
        console.log("Error occured while fetching user");
        res.status(404).json({message:error.message})
    }
}

 export const SignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Internal server error" });
    }
}

 export const Login=async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        else{
            res.status(200).json({ message: "User logged in successfully",user:{
                id:user._id,
                name:user.name,
                email:user.email
            } });
        }
        
    } catch (error) {
        console.error("Error details:"+error.message); // Log the error details
        res.status(500).json({ message: "Internal server error" });
    }
}
