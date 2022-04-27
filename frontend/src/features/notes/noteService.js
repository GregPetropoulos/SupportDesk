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
  // *To GET the notes, send the ticketId/notes and the users token from config in the params
  const response = await axios.get(API_URL + ticketId + '/notes', config);

  return response.data;
};
// *----------------------------------------------------------------------

// *----------------------------------------------------------------------
// * CREATE TICKET NOTES
const createNote = async (noteText, ticketId, token) => {
  //* Just like postman will need to use headers and Authorization field to get the Bearer token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  // *Creating a note on the ticket, and argument is the data object {text:noteText}
  const response = await axios.post(
    API_URL + ticketId + '/notes',
    { text: noteText },
    config
  );

  return response.data;
};
// *----------------------------------------------------------------------

const noteService = {
  getNotes,
  createNote,
};
export default noteService;
