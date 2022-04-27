// * Note schema

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    //* Need to make a relationship between the ticket and users by the ObjectId in the User schema
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }, //* The note reference the ticket it's related to
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Ticket'
    },
    text: {
      type: String,
      required: [true, 'Please add some text']
    }, //*The staff is to show who made the note for now, later these are first steps to building an admin portal
    isStaff: {
      type: Boolean,
      default: false
    },
    staffId: {
      type: String
    }
  },
  // after the schema object add in timestamps
  {
    timestamps: true
  }
);
module.exports = mongoose.model('Note', noteSchema);
