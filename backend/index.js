import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import connectDB from "./config/databaseConfig.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
connectDB(process.env.MONGODB_URI);
const port = process.env.PORT || 5500;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});