import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    changeMode: false,
  },
  reducers: {
    changeTheme(state) {
      state.changeMode = !state.changeMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

//Selector
export const getTheme = state => state.theme.changeMode;
