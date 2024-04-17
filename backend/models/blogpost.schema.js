import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{timestamps: true});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;