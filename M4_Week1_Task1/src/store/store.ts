import { combineReducers, createStore } from "redux";
import { contactsListReducer, favoriteContactsReducer, groupContactsReducer } from "../store/reducers";

export const store = createStore(
  combineReducers({
    contactState: contactsListReducer,
    groupContactsState: groupContactsReducer,
    favoriteContactsState: favoriteContactsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
