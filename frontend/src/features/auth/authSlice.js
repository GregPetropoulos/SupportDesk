// * ACTIONS???
// This is essentially my reducer and gets brought into the store.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// shape initial state
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// *REGISTER A USER
// AsyncThunk function takes an argument the string name and async function.
// Inside the async function pass the user from the form and thunkAPI
//  register gets exported to Register.js
export const register = createAsyncThunk('/auth/register', async (user, thunkAPI)=>{
console.log(user);
})

// *LOGIN A USER
// same as register notes
export const login = createAsyncThunk('/auth/login', async (user, thunkAPI)=>{
    console.log(user);
    })

export const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{},
    // EXTRAREDUCERS ALLOWS US TO ADD CASES
    extraReducers: (builder)=> {  
    }
})

export default authSlice.reducer