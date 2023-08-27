import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

export const store = configureStore({
    // global store is the whole cake whereas reducer will allow us to only grab what we need
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});