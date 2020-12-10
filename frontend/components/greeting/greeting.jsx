import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="navbar-logged">
            <p className="text-white">Hello, {currentUser.email}</p>
            <button className="btn-white text-blue signup-btn" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="navbar-auth">
            <li><Link className="text-white login-btn" to="/login">Log&nbsp;In</Link></li>
            <li><Link className="btn-white text-blue" to="/signup">Sign&nbsp;Up</Link></li>
        </div>
    );

    return(
            <div>
                {greeting}
            </div>
    )
}

export default Greeting;