import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
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
export const themeReducer = themeSlice.reducer;

//Selector
export const getTheme = state => state.theme.changeMode;
