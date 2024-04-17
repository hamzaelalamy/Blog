import User from '../models/user.schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        // Extract user details from request body
        const { username, email, password } = req.body;

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create a new user with hashed password
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword // Store hashed password in the database
        });

        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email, usename: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Token expires in 1 hour
        });

        // Set the JWT token in a cookie
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ message: 'Login successful', data: user });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};

export const logoutUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging out' });
    }
}


