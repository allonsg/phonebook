import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsSlice } from './contactsSlice';
import { userSlice } from './userSlice';
import { themeSlice } from './themeSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['changeMode'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    user: persistReducer(userPersistConfig, userSlice.reducer),
    theme: persistReducer(themePersistConfig, themeSlice.reducer),
  },
  middleware,
});

export const persistor = persistStore(store);
