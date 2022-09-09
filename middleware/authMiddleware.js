// *MIDDLEWARE FOR PROTECTED ROUTES
const jwt = require('jsonwebtoken');
const asyncHandler= require('express-async-handler');
const User = require('../models/userModel');

const protect= asyncHandler(async(req,res,next)=> {

// initialize token
    let token;
// Bearer token?
// Check for token in the headers for authorization and Bearer token
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
try {
    // Get the token from the header
    // comes back as "Bearer token" must split at space
    // split will give this [Bearer token] and need the second idx
    token= req.headers.authorization.split(' ')[1]

    // Verify the token value
    const decoded = jwt.verify(token, process.env.JWT_SECRET)


    // GET USER FROM ID IN THE TOKEN MINUS PASSWORD
    req.user =await User.findById(decoded.id).select('-password')
next()
} catch (error) {
// console.log(error);
res.status(401)
throw new Error('Not Authorized Token')
}
}

//  if there is no token
if(!token){
    res.status(401)
    throw new Error('Not Authorized, No Token')
}

})
module.exports = {protect}