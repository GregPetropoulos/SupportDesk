import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// *----------------------------------------------------------------------
// *GET All USER NOTES
// AsyncThunk function takes an argument the string name and async function.
// Inside the async function pass the user from the form and thunkAPI

export const getNotes = createAsyncThunk(
  '/notes/getAll',
  async (ticketId, thunkAPI) => {
    try {
      // by using the thunkAPI we can access a piece of state from anywhere. In this case we can get the user object to get the token from the authstate with the method  called getState, We are doing this to pass it to the service which will make api call to tickets--huge advantage here vs vanilla Redux
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.getNotes(ticketId, token);
    } catch (error) {
      // Take message from the backend in noteController.js logic is a status code and message passed to the middleware errorMiddleware.js we want to and place it in the state message in the front end
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
// *----------------------------------------------------------------------

// *----------------------------------------------------------------------
// *CREATE A TICKET NOTE
// AsyncThunk function takes an argument the string name and async function.
// Inside the async function pass the user from the form and thunkAPI

export const createNote = createAsyncThunk(
  '/notes/notes',
  async ({ noteText, ticketId }, thunkAPI) => {
    try {
      // by using the thunkAPI we can access a piece of state from anywhere. In this case we can get the user object to get the token from the authstate with the method  called getState, We are doing this to pass it to the service which will make api call to tickets--huge advantage here vs vanilla Redux
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.createNote(noteText, ticketId, token);
    } catch (error) {
      // Take message from the backend in noteController.js logic is a status code and message passed to the middleware errorMiddleware.js we want to and place it in the state message in the front end
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
// *----------------------------------------------------------------------

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder //*--------------------------------------------------GET NOTES
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes = action.payload; // notes gets assigned an array og notes from the server
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //this comes from calling te back end via getNotes return thunkAPI.rejectWithValue(message);
      }) //*------------------------------------------------------CREATE NOTES
      .addCase(createNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes.push(action.payload); //TO SHOW UP IN UI WITHOUT HAVING TO UPLOAD
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //this comes from calling te back end via createNote return thunkAPI.rejectWithValue(message);
      }); //*------------------------------------------------------
  }
});

export const { reset } = noteSlice.actions;
// Needed for the store to wrap the application and make state available to all components
export default noteSlice.reducer;
