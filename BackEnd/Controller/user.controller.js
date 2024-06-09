import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";



export const signup = async(req, res) => {
    try {
        const { FullName, Email, password } = req.body;
        const user = await User.findOne({ Email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword =await bcryptjs.hash(password, 10);
        const createdUser = new User({
            FullName: FullName,
            Email: Email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user:{
                _id: createdUser._id,
                fullname:createdUser.FullName,
                email:createdUser.Email,
            },
           
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async(req, res) => {
    try {
        const { Email, password } = req.body;
        const user = await User.findOne({ Email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.FullName,
                    email: user.Email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};