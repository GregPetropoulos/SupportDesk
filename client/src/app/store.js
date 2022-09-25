// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

import { configureStore } from '@reduxjs/toolkit';
// Bring in reducer
import authReducer from '../features/auth/authSlice';
import ticketReducer from '../features/tickets/ticketSlice';
import noteReducer from '../features/notes/noteSlice';

// Connecting the store to the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer
  },
  //Deactivate devtools for render deployment
  devTools:false,
});
