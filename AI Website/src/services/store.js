import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from './article';

export const store = configureStore({ //store is global state 

    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});


