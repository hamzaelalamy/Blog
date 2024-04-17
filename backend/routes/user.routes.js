import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/user.controllers.js';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get a user by ID
router.get('/:id', getUser);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

export default router;