// * User schema

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    required: true
  },
//   for an admin user
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
// after the schema object add in timestamps

{
    timestamps:true
}
);
module.exports =mongoose.model('User', userSchema)