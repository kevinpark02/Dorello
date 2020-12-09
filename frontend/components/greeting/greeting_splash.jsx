import React from 'react';

const GreetingSplash = () => {
    return(
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
    )
}

export default GreetingSplash;