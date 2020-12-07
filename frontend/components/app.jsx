import React from "react";
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Dorello</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;