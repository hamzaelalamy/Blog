import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import connectDB from "./config/databaseConfig.js";
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/authentication.routes.js';
import postRoutes from './routes/blogpost.routes.js';

const app = express();
connectDB(process.env.MONGODB_URI);
const port = process.env.PORT || 5500;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/user', userRoutes );
app.use('/api/auth', authRoutes );
app.use('/api/post', postRoutes );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});