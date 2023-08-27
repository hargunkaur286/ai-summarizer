

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery
    ({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

// useGetSummaryQuery will load the api as soon as we load our application but what useLazyGetSummaryQuery does is that it only loads the article, when we click on the button i.e. on demand.
export const {useLazyGetSummaryQuery} = articleApi;

// Encodes a text string as a valid component of a Uniform Resource Identifier (URI) => encodeURIComponent