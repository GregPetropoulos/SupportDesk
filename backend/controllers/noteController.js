// *NOTECONTROLLER
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Need to wrap entire function
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');
const Note = require('../models/noteModel');

// * @desc Get note for a ticket
// * @route GET /api/tickets/:ticketId/notes
// * access Private
const getNotes = asyncHandler(async (req, res) => {
  // Get the user by using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  //   Gets the single ticketId from the url
  const ticket = await Ticket.findById(req.params.ticketId);

  //   Make sure this is the users ticket, check user id in db and is not equal to the users id in token, throw an error
  if (ticket.user.toString() !== req.user.id) {
    res.status(401); //Unauthorized
    throw new Error('Not Authorized');
  }

  //   Go into the db for note collection  and find the ticket with matching ticketId in url
  const notes = await Note.find({ ticket: req.params.ticketId });
  res.status(200).json(notes);
});

// * @desc Create not a ticket note
// * @route POST /api/tickets/:ticketId/notes
// * access Private
const addNotes = asyncHandler(async (req, res) => {
  // Get the user by using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  //   Gets the single ticketId from the url
  const ticket = await Ticket.findById(req.params.ticketId);

  //   Make sure this is the users ticket, check user id in db and is not equal to the users id in token, throw an error
  if (ticket.user.toString() !== req.user.id) {
    res.status(401); //Unauthorized
    throw new Error('Not Authorized');
  }

  //*CREATING THE NOTE IN THE DB
  // Go into the db for note collection and create the note fields and fill with the  info sent through the params like ticketId in url,body, user id etc
  const note = await Note.create({
    text: req.body.text,
    isStaff:false,
    ticket: req.params.ticketId,
    user:req.user.id
  });
  res.status(200).json(note);
});
module.exports = {
  getNotes,
  addNotes,
};
