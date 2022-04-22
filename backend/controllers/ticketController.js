// *TICKETCONTROLLER
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Need to wrap entire function
const asyncHandler = require('express-async-handler');
const { off } = require('../models/userModel');

const User = require('../models/userModel');
Ticket = require('../models/ticketModel');

// * @desc Get user tickets
// * @route GET /api/tickets
// * access Private
const getTickets = asyncHandler(async (req, res) => {
  // Get the user by using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// * @desc Create a new ticket
// * @route POST /api/tickets
// * access Private
const createTickets = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add a product and description');
  }

  // Get the user by using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new'
  });

  // 201 for created
  res.status(201).json(ticket);
});

module.exports = {
  getTickets,
  createTickets
};
