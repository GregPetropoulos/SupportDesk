import axios from 'axios';

const API_URL = '/api/tickets/';

// *----------------------------------------------------------------------
// * GET NOTES
const getNotes = async (ticketId, token) => {
  //* Just like postman will need to use headers and Authorization field to get the Bearer token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  // *Sending the new ticket data and the users token from config in the params via api/tickets/
  const response = await axios.get(API_URL + ticketId + '/notes', config);

  return response.data;
};
// *----------------------------------------------------------------------

const noteService = {
  getNotes
};
export default noteService;
