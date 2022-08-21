import { createSlice } from '@reduxjs/toolkit'
import errorAction from '../actions/error.action';

const initialState = {};

const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: errorAction
})

// ! slice to add in main store
export default errorSlice;

// ! Actions for state managemnt
export const { setErrors } = errorSlice.actions;
