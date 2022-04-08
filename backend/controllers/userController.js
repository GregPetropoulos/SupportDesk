// *ROUTE LOGIC
//Logic use in place of the req,res for each route

const registerUser = (req, res) => {
  res.send('Register Route');
};

const loginUser = (req, res) => {
  res.send('Login Route');
};

module.exports = {
  loginUser,
  registerUser
};
