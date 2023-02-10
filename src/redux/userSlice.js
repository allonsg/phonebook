import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAuthRequest,
  loginRequest,
  logOutRequest,
  signUpRequest,
} from 'services/api';
import { toast } from 'react-toastify';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const userData = await signUpRequest(formData);
      // userData?.token && localStorage.setItem('token', userData.token);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (formData, { rejectWithValue }) => {
    try {
      const userData = await loginRequest(formData);
      // userData?.token && localStorage.setItem('token', userData.token);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAuth = createAsyncThunk(
  'user/auth',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await getAuthRequest();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logOutRequest();
      // localStorage.removeItem('token');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    //SignUp
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;

      toast.error(
        'Something went wrong...Try reloading the page and enter valid email',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    });
    //Login
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(
        'Something went wrong...Try reloading the page and enter valid email, password',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    });
    // Authorization
    builder.addCase(getAuth.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAuth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(getAuth.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.token = '';
      // toast.error('Your previous session time has been out', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    });
    // LogOut
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.isLoading = false;
      state.user = null;
      state.token = '';
    });
    builder.addCase(logOut.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      // state.token = '';
      toast.error(`${payload}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
  },
});

//Selectors
export const getIsLoading = state => state.user.isLoading;
export const getError = state => state.user.error;
export const getUser = state => state.user.user;
