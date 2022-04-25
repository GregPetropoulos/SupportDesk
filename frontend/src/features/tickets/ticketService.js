import axios from 'axios';

const API_URL = '/api/tickets/';

// *----------------------------------------------------------------------
// * CREATE A NEW TICKET
const createTicket = async (ticketData, token) => {
  // Just like postman will need to use headers and Authorization field to get the Bearer token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
// *Sending the new ticket data and the users token from config in the params via api/tickets/
  const response  = await axios.post(API_URL, ticketData, config)

  return response.data
};
// *----------------------------------------------------------------------

// *----------------------------------------------------------------------
// * GET USER TICKETS
const getTickets = async (token) => {
    //* Just like postman will need to use headers and Authorization field to get the Bearer token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  // *Sending the new ticket data and the users token from config in the params via api/tickets/
    const response  = await axios.get(API_URL, config)
  
    return response.data
  };
  // *----------------------------------------------------------------------
  
  

const ticketService = {
    createTicket,
    getTickets,
}

export default ticketService