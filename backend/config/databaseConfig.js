import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async(url) => {
    try {
        await mongoose.connect(url, {
            autoIndex: true
        })
        console.log('Connected to Mongodb');} catch (error) {
        console.error(error);
    }
}

export default connectDB;