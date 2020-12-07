import React from "react";
import ReactDOM from "react-dom";


// FOR TESTING - START
import { signup, login, logout } from "./actions/session_actions";
import configureStore from './store/store';
// FOR TESTING - END

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // FOR TESTING - START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // FOR TESTING - END

    ReactDOM.render(<h1>Dorello</h1>, root);
});