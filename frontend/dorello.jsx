import React from "react";
import ReactDOM from "react-dom";


// FOR TESTING
import { signup, login, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    // FOR TESTING - START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    // FOR TESTING - END
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Dorello</h1>, root);
});