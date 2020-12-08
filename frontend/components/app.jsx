import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import BoardIndexContainer from "./boards/board_index_container";
import BoardFormContainer from "./boards/create_board_form_container";
import EditBoardFormContainer from "./boards/edit_board_form_container";
import BoardShowContainer from "./boards/board_show_container";


const App = () => (
  <div>
    <header>
      <h1>Dorello</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <ProtectedRoute path="/feed" component={BoardIndexContainer} />
    <ProtectedRoute path="/feed" component={BoardFormContainer} />

    <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer}/>
    <ProtectedRoute path="/boards/:boardId/edit" component={EditBoardFormContainer} />
    

  </div>
);

export default App;