import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

//https://mocki.io/v1/36cd0061-02bd-4275-a8d6-85545686e500 - contactsGroup
export const groupContactsAPI = createApi({
  reducerPath: "groupContactsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1/" }),
  endpoints: (builder) => ({
    getGrooupContactsList: builder.query<GroupContactsDto[], void>({
      query: () => `36cd0061-02bd-4275-a8d6-85545686e500`,
    }),
  }),
});

export const { useGetGrooupContactsListQuery } = groupContactsAPI;
