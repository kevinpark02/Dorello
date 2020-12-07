import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store';



// FOR TESTING - START
import { login } from "./actions/session_actions";
// FOR TESTING - END

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
    const preloadedState = {
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }

    // FOR TESTING - START
    window.login = login;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // FOR TESTING - END

    ReactDOM.render(<Root store={store} />, root);
});