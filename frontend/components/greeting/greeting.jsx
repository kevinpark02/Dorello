import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <ul>
                <Link to="/signup">Sign&nbsp;Up</Link>
                <Link to="/login">Log&nbsp;In</Link>
            </ul>
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