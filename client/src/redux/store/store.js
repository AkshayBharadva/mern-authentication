import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import authReducer from '../reducers/auth.reducer';
import errorReducer from '../reducers/error.reducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        errors: errorReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
})
