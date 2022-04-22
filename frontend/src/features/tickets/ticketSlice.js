

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import ticketService from'./ticketService';

// Create initial state
const initialState ={
tickets:[],
ticket:{},
isError:false,
isSuccess:false,
isLoading:false,
message:''
}

// Create a slice
export const ticketSlice =createSlice({
    name:'ticket',
    initialState,
    reducers: {
        reset: (state)=> initialState
    },
    extraReducers: (builder)=> {

    }
})


export const {reset} = ticketSlice.actions

export default ticketSlice.reducer