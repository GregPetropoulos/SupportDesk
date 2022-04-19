// * ACTIONS???
// This is essentially my reducer and gets brought into the store.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from './authService';

// To keep the logged in user persistent on page reload must save to local storage
const user = JSON.parse(localStorage.getItem('user'));

// shape initial state
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// *REGISTER A USER
// AsyncThunk function takes an argument the string name and async function.
// Inside the async function pass the user from the form and thunkAPI
//  register gets exported to Register.js
export const register = createAsyncThunk(
  '/auth/register',
  async (user, thunkAPI) => {
    // console.log(user);
    try {
      return await authService.register(user);
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

// *LOGIN A USER
// same as register notes
export const login = createAsyncThunk('/auth/login', async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //   resetting state to default gets called in useEffect in the Register.js
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  // extraReducers with the createAsyncThunk allows us to add cases and chain on
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //*this is coming from the try in register
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //* this is coming from the trycatch error message from back end see return thunkAPI.rejectWithValue(message) in const register
        state.user = null;
      });
  }
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
