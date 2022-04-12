// *ROUTE LOGIC
//Logic use in place of the req,res for each route

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Need to wrap entire function
const asyncHandler = require('express-async-handler');

// * @desc Register a new user
// * @route /api/users
// * access Public
const registerUser = asyncHandler(async (req, res) => {
  // Destructure
  const { name, email, password } = req.body;

  //Validate
  if (!name || !email || !password) {
    // send the client error, client didn't fill out all the info
    res.status(400);
    throw new Error('Please include all fields');
  }
  console.log(req.body);
  res.send('Register Route');
});

// * @desc Login a new user
// * @route /api/users/login
// * access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  loginUser,
  registerUser
};
