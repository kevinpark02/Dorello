import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="navbar-auth">
            <li><Link className="text-white login-btn" to="/login">Log&nbsp;In</Link></li>
            <li><Link className="btn-white text-blue signup-btn" to="/signup">Sign&nbsp;Up</Link></li>
        </div>
    );

    return(
        <header>
            <div>
                {greeting}
            </div>
        </header>
    )
}

export default Greeting;