import { createSlice } from '@reduxjs/toolkit'
import authAction from '../actions/auth.action';

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: authAction
})

// ! slice to add in main store
export default authSlice;

// ! Actions for state managemnt
export const { setCurrentUser, setUserLoading } = authSlice.actions;
