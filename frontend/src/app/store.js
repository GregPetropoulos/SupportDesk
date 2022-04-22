// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

import { configureStore } from '@reduxjs/toolkit';
// Bring in reducer
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'

// Connecting the store to the reducers
export const store = configureStore({
  reducer: {
    auth:authReducer,
    ticket:ticketReducer,
  }
});
