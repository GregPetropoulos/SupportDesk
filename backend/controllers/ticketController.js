// *TICKETCONTROLLER
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Need to wrap entire function
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
Ticket = require('../models/ticketModel');

// * @desc Get user tickets
// * @route GET /api/tickets
// * access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTicket route' });
});

// * @desc Create a new ticket
// * @route POST /api/tickets
// * access Private
const createTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket route' });
});

module.exports = {
  getTickets,
  createTickets
};
