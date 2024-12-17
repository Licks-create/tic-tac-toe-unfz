/* eslint-disable no-unused-vars */
import {configureStore} from "@reduxjs/toolkit"
import todoReducers from "../features/todo/todoSlice"
export const store=configureStore({
    reducer:{TODO:todoReducers}
})