import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props)

        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleDemo(e) {
        const demoUser = { email: "demo@dorello.com", password: "demoonly" }

        e.preventDefault();
        this.props.login(demoUser)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
    const greeting = this.props.currentUser ? (
        <div className="navbar-logged">
            <div className="left-buttons">
                <Link to="/feed"><button className="home-btn"><i className="fas fa-home fa-lg"></i></button></Link>
                <button className="boards-btn"><i className="fab fa-trello fa-lg"></i>&nbsp;&nbsp;Boards</button>

            </div>
            <div className="right-profile">
                <p className="text-white">Hello, {this.props.currentUser.email}</p>
                <button className="btn-white-logout text-blue" onClick={this.handleLogout}>Log&nbsp;Out</button>
            </div>
        </div>
    ) : (
        <div className="navbar">
            <li><Link to="/" className="dorello-link"><h1 className="dorello-white"><span><img className="home-logo" src={window.logo} alt="logo"/></span><span>&nbsp;</span>&nbsp;Dorello</h1></Link></li>
            <div className="navbar-auth">
                <li><Link className="text-white login-btn" to="/login">Log&nbsp;In</Link></li>
                <li><Link className="btn-white text-blue" to="/signup">Sign&nbsp;Up</Link></li>
                <li className="demo-btn"><button onClick={this.handleDemo}>Demo</button></li>
            </div>
        </div>
    );
        return(
            <div>
                {greeting}
            </div>
        )
    }
}

// const Greeting = ({currentUser, logout, login}) => {
//     const demoUser = {
//                         email: "demo@trello.com",
//                         password: "demoonly"
//                      }

//     const greeting = currentUser ? (
//         <div className="navbar-logged">
//             <p className="text-white">Hello, {currentUser.email}</p>
//             <button className="btn-white text-blue" onClick={logout}>Log Out</button>
//         </div>
//     ) : (
//         <div className="navbar-auth">
//             <li><Link className="text-white login-btn" to="/login">Log&nbsp;In</Link></li>
//             <li><Link className="btn-white text-blue" to="/signup">Sign&nbsp;Up</Link></li>
//             <li className="demo-btn"><button onClick={login(demoUser)}>Demo</button></li>
//         </div>
//     );

//     return(
//             <div>
//                 {greeting}
//             </div>
//     )
// }

export default Greeting;