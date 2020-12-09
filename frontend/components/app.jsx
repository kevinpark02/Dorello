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
    <header className="hero">
      <div className="navbar">
        <h1 className="dorello">Dorello</h1>
        <GreetingContainer />
      </div>

      <div className="content">
        <div className="content-description">
          <div className="content-text text-white">
            <h1>Trello helps teams work more collaboratively and get more done.</h1>
            <p>Trello's boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
          </div>
          <div className="content-img">
            <img src={window.homepage_splash} alt="homepage_splash"/>
          </div>
        </div>
      </div>

      

      
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