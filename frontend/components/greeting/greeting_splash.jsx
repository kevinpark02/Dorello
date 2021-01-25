import React from 'react';

const GreetingSplash = () => {
    return(
        <div className="homepage">
            <div className="content">
                <div className="content-description">
                    <div className="content-text text-white">
                        <h1 className="text-white">Dorello helps teams work more collaboratively and get more done.</h1>
                        <p className="text-white">Dorello's boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
                    </div>
                    <div className="content-img">
                        <img src={window.homepage_splash} alt="homepage_splash"/>
                    </div>
                </div>
            </div>
            <div className="sub-content-1">
                <div className="left-sub-content-1">
                    <h1><i class="fab fa-linkedin"></i> &nbsp;LinkedIn</h1>
                    <p>See my profile and connect with me!</p>
                </div>
                <div className="right-sub-content-1">
                    <a href="https://www.linkedin.com/in/kevin-park-04286949/" target="_blank"><img src={window.homepage_linkedin} alt="homepage_img1"/></a>
                </div>
            </div>
            <div className="sub-content-2">
                <div className="left-sub-content-2">
                    <a href="https://github.com/kevinpark02/Dorello" target="_blank"><img src={window.homepage_github} alt="homepage_github"/></a>
                </div>
                <div className="right-sub-content-2">
                    <h1><i class="fab fa-github-square"></i> &nbsp;Github</h1>
                    <p>Here's my Github repository for this application!</p>
                </div>
            </div>
            <div className="sub-content-3">
                <div className="left-sub-content-3">
                    <h1><i class="fab fa-angellist"></i> &nbsp;Angelist</h1>
                    <p>Check out my profile and see more information!</p>
                </div>
                <div className="right-sub-content-3">
                    <a href="https://angel.co/u/kevin-park-33" target="_blank"><img src={window.homepage_angelist} alt="homepage_angelist"/></a>
                </div>
            </div>
            <div className="sub-content-4">
                <div className="left-sub-content-4">
                    <a href="https://www.kevpark.me/" target="_blank"><img src={window.homepage_portfolio} alt="homepage_porfolio"/></a>
                </div>
                <div className="right-sub-content-4">
                    <h1><i class="fas fa-images"></i> &nbsp;Portfolio</h1>
                    <p>Take a look at the other projects on my portfolio!</p>
                </div>
            </div>
        </div>
    )
}

export default GreetingSplash;