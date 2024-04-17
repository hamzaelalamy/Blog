import User from '../models/user.schema.js';

// Create a new user
export const createUser = async (req, res) => {
    try {
      // logic to create a new user goes here
      const newUser = await User.create(req.body);
      // Return a success response
      res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Error creating user' });
    }
  };
  
  // Get a user by ID
  export const getUser = async (req, res) => {
    try {
      // logic to retrieve a user by ID goes here
      const user = await User.findById(req.params.id);
      // Return the user data
      res.status(200).json({ data: user });
    } catch (error) {
      // Handle any errors
      res.status(404).json({ error: 'User not found' });
    }
  };
  
  // Update a user by ID
  export const updateUser = async (req, res) => {
    try {
      // logic to update a user by ID goes here
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // Return the updated user data
      res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Error updating user' });
    }
  };
  
  // Delete a user by ID
  export const deleteUser = async (req, res) => {
    try {
      // logic to delete a user by ID goes here
      await User.findByIdAndDelete(req.params.id);
      // Return a success response
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Error deleting user' });
    }
  };
  