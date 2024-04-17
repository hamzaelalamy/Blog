import express from 'express';
import {
    getAllBlogPosts,
    getBlogPostById,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
} from '../controllers/blogpost.controllers.js';

const router = express.Router();

// GET all blog posts
router.get('/', getAllBlogPosts);

// GET a single blog post by ID
router.get('/:id', getBlogPostById);

// POST a new blog post
router.post('/', createBlogPost);

// PUT update a blog post
router.put('/:id', updateBlogPost);

// DELETE a blog post
router.delete('/:id', deleteBlogPost);

export default router;