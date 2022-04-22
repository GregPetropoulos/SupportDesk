// * Ticket schema

const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    // Need to make a relationship between the ticket and users by the ObjectId in the User schema
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enums: ['iPhone', 'Macbook Pro', 'iMac', 'iPad']
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue']
    },
    //   Status default to new when first open
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new'
    }
  },
  // after the schema object add in timestamps
  {
    timestamps: true
  }
);
module.exports = mongoose.model('Ticket', ticketSchema);
