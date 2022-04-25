import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ticketService from './ticketService';

// Create initial state
const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// *----------------------------------------------------------------------
// *CREATE NEW TICKET
// AsyncThunk function takes an argument the string name and async function.
// Inside the async function pass the user from the form and thunkAPI

export const createTicket = createAsyncThunk(
  '/tickets/create',
  async (ticketData, thunkAPI) => {
    try {
      // by using the thunkAPI we can access a piece of state from anywhere. In this case we can get the user object to get the token from the authstate with the method  called getState, We are doing this to pass it to the service which will make api call to tickets--huge advantage here vs vanilla Redux
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.createTicket(ticketData, token);
    } catch (error) {
      // Take message from the backend in userController.js logic is a status code and message passed to the middleware errorMiddleware.js we want to and place it in the state message in the front end
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

//*CREATE SLICE
export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //this comes from calling te back end via createTicket return thunkAPI.rejectWithValue(message);
      });
  }
});

export const { reset } = ticketSlice.actions;

export default ticketSlice.reducer;
