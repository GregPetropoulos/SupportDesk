const express = require('express');
const router = express.Router();
const { getTickets, createTickets }=require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

// can chain on .get and .post to the .route just to get the users tickets
// In the GET handler the protect is so only an authenticated user can get his own tickets only.
// Could admin functionality to get all tickets later...
router.route('/').get(protect, getTickets).post(protect, createTickets);

module.exports = router;
