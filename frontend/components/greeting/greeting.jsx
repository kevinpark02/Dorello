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
            <p className="text-white">Hello, {this.props.currentUser.email}</p>
            <button className="btn-white text-blue" onClick={this.handleLogout}>Log Out</button>
        </div>
    ) : (
        <div className="navbar-auth">
            <li><Link className="text-white login-btn" to="/login">Log&nbsp;In</Link></li>
            <li><Link className="btn-white text-blue" to="/signup">Sign&nbsp;Up</Link></li>
            <li className="demo-btn"><button onClick={this.handleDemo}>Demo</button></li>
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