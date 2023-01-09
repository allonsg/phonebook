import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    user: userSlice.reducer,
  },
});
