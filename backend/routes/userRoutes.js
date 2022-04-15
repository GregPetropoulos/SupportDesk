const express = require('express');
const router = express.Router();

// bring logic from the controllers folder
const { registerUser, loginUser, getMe } = require('../controllers/userController');

// Bring in middleware to protect routes
const {protect}= require('../middleware/authMiddleware')

// apply controllers logic here in place of req,res
// example: router.method(path, logic)
router.post('/', registerUser);
router.get('/login', loginUser);

// protected route
router.get('/me',protect, getMe);

module.exports = router;
