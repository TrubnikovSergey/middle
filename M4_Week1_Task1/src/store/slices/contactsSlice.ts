import { AppDispatch } from "./../store";
import { FavoriteContactsDto } from "./../../types/dto/FavoriteContactsDto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

//https://mocki.io/v1/774cf74e-cb0e-4d22-9433-77b8a9f9b7bd - contacts
const initialState: {
  entities: FavoriteContactsDto;
} = { entities: [] };

export const favoriteContactsSlice = createSlice({
  name: "favoriteContactsState",
  initialState,
  reducers: {
    setFavoriteContacts(state, action: PayloadAction<FavoriteContactsDto>) {
      state.entities = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(contactsAPI.endpoints.getContactsList.matchFulfilled, (state, action) => {
      if (action.payload) {
        let favorite: FavoriteContactsDto = [];

        for (let i = 0; i < action.payload.length; i++) {
          if (i === 4) {
            break;
          }
          const item = action.payload[i];

          favorite.push(item.id);
        }

        state.entities = favorite;
      }
    });
  },
});

const { reducer, actions } = favoriteContactsSlice;

export const contactsAPI = createApi({
  reducerPath: "contactsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1/" }),
  endpoints: (builder) => ({
    getContactsList: builder.query<ContactDto[], void>({
      query: () => `774cf74e-cb0e-4d22-9433-77b8a9f9b7bd`,
    }),
  }),
});

export const { useGetContactsListQuery } = contactsAPI;
