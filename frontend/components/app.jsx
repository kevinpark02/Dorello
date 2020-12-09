import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Link } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import GreetingSplash from "./greeting/greeting_splash"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import BoardIndexContainer from "./boards/board_index_container";
import BoardFormContainer from "./boards/create_board_form_container";
import EditBoardFormContainer from "./boards/edit_board_form_container";
import BoardShowContainer from "./boards/board_show_container";


const App = () => (
  <div>
    <header className="hero">
      <div className="navbar">
        <Link to="/" className="dorello-link"><h1 className="dorello">Dorello</h1></Link>
        <GreetingContainer />
      </div>
      <AuthRoute exact path="/" component={GreetingSplash} />      
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