import { groupContactsAPI } from "./slices/groupContactsSlice";
import { contactsAPI, favoriteContactsSlice } from "./slices/contactsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  favoriteContactsState: favoriteContactsSlice.reducer,
  [contactsAPI.reducerPath]: contactsAPI.reducer,
  [groupContactsAPI.reducerPath]: groupContactsAPI.reducer,
});

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([contactsAPI.middleware, groupContactsAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
