const express = require('express');
const router = express.Router();
const {
  createTickets,
  getTickets,
  getTicket,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

//*Gets all auth users tickets and creates a ticket (read, create)
// can chain on .get and .post to the .route just to get the users tickets
// In the GET handler the protect is so only an authenticated user can get his own tickets only.
// Could admin functionality to get all tickets later...
router.route('/').get(protect, getTickets).post(protect, createTickets);

//*To get an auth user's single ticket by ticket id, read, edit and delete
router.route('/:id').get(protect, getTicket).put(protect, updateTicket).delete(protect, deleteTicket);


module.exports = router