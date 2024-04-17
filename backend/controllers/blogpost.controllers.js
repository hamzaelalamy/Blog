// Import any necessary modules or dependencies here
import BlogPost from '../models/blogpost.schema.js' // Assuming you have a BlogPost model

// Controller to get all blog posts
export const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.status(200).json(blogPosts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
};

// Controller to get a single blog post by ID
export const getBlogPostById = async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json(blogPost);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog post' });
    }
};

// Controller to create a new blog post
export const createBlogPost = async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create(req.body);
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog post' });
    }
};

// Controller to update a blog post
export const updateBlogPost = async (req, res) => {
    try {
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json(updatedBlogPost);
    } catch (error) {
        res.status(500).json({ error: 'Error updating blog post' });
    }
};

// Controller to delete a blog post
export const deleteBlogPost = async (req, res) => {
    try {
        const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedBlogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting blog post' });
    }
};
