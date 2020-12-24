import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import GreetingSplash from "./greeting/greeting_splash"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import BoardIndexContainer from "./boards/board_index_container";
import BoardShowContainer from "./boards/board_show_container";

import ListIndexContainer from "./lists/list_index_container";

import Modal from "../modal/modal";


const App = () => (
  <div>
    <header className="hero">
      {/* <div className="navbar"> */}
        {/* <Link to="/" className="dorello-link"><h1 className="dorello"><span><img className="home-logo" src={window.logo} alt="logo"/></span><span>&nbsp;</span>&nbsp;Dorello</h1></Link> */}
        <GreetingContainer />
      {/* </div> */}
      <AuthRoute exact path="/" component={GreetingSplash} />      
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <ProtectedRoute path="/feed" component={BoardIndexContainer} />

    <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
    <ProtectedRoute exact path="/boards/:boardId" component={ListIndexContainer}/>
    <ProtectedRoute exact path="/boards/:boardId" component={Modal}/>
  </div>
);

export default App;