const express = require('express');
const router = express.Router();

// bring logic from the controllers folder
const { registerUser, loginUser } = require('../controllers/userController');

// apply controllers logic here in place of req,res
// example: router.method(path, logic)
router.post('/', registerUser);
router.get('/login', loginUser);

module.exports = router;
