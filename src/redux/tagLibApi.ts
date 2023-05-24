import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TagResponse } from '#types/Persona';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/personas/libraries',
  }),
  endpoints: (builder) => ({
    getTagLibrary: builder.query<TagResponse, void>({
      query: () => '',
    }),
  }),
});

export const { useGetTagLibraryQuery } = apiSlice;
