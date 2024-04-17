import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authentication.controllers.js";

const router = express.Router();

// Route for user registration
router.post("/register", registerUser);

// Route for user login
router.post("/login", loginUser);

// Route for resetting password
router.post("/logout", logoutUser);

export default router;
