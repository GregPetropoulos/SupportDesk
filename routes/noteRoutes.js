const express = require('express');
// mergeParams-Preserve the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence.
// * allows us to bring the noteRoutes in to the ticketRoutes for a Re-Route
const router= express.Router({mergeParams:true});

const {getNotes, addNotes}= require('../controllers/noteController')

// middleware for protected routes
const {protect} = require('../middleware/authMiddleware');

// protect Get route passing getNotes logic, and POST to create a note
router.route('/').get(protect, getNotes).post(protect,addNotes);

module.exports = router;

// *SIDE NOTE
// * Since the route here is for notes the path name will not be /api/ticket/:ticketId/notes
// * Must go into the ticketRoutes and create a new route pathway