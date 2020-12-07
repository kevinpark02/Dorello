import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store';



// FOR TESTING - START
import { login } from "./actions/session_actions";
// FOR TESTING - END

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // FOR TESTING - START
    window.login = login;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // FOR TESTING - END

    ReactDOM.render(<Root store={store} />, root);
});