import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const storiesApi = createApi({
  reducerPath: "storiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://writing-hat-api.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => ({ url: `/prompts` }),
    }),
    addStory: builder.mutation({
      query: (story) => ({
        url: "/prompts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: story,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStoriesQuery, useAddStoryMutation } = storiesApi;
