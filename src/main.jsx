/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NotesState from "./Notes/NotesState.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

// {
//    <NotesState>
// <App />
// </NotesState> 
// }
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
