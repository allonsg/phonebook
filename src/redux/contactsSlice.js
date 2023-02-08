import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  editContactRequest,
  getContactsRequest,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsRequest();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newObj, { rejectWithValue }) => {
    try {
      const data = await addContactRequest(newObj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContactRequest(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (obj, { rejectWithValue }) => {
    try {
      const data = await editContactRequest(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    deleteContact(state, { payload }) {
      state.contacts = [...payload];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    userLogOut(state) {
      state.contacts = [];
    },
  },
  extraReducers: builder => {
    //Fetch Contact
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    });
    builder.addCase(fetchContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    //Add Contact
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.contacts = [...state.contacts, payload];
    });
    builder.addCase(addContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    //Remove Contact
    builder.addCase(removeContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(removeContact.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(removeContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    // Edit Contact
    builder.addCase(editContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    });
    builder.addCase(editContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { deleteContact, setFilter, userLogOut } = contactsSlice.actions;

//Selectors
export const getContacts = ({ contacts }) => contacts.contacts;
export const getFilter = ({ contacts }) => contacts.filter;
