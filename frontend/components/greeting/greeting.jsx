import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BoardShowContainer from '../boards/board_show_container';

class Greeting extends React.Component {
    constructor(props) {
        super(props)

        this.state = { clicked: false,
                       profile: false
                     };

        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showProfile = this.showProfile.bind(this);
        this.closeProfile = this.closeProfile.bind(this);
    }

    handleDemo(e) {
        const demoUser = { email: "demo@dorello.com", password: "demoonly" }

        e.preventDefault();
        this.props.login(demoUser)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(this.setState({['clicked']: false, ['profile']: false}))
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({['clicked']: !this.state['clicked']}, () => {
            document.addEventListener('mousedown', this.closeMenu)
        })
    }

    
    closeMenu(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ clicked: false }, () => {
                document.removeEventListener('mousedown', this.closeMenu);
            });
        }
    }
    
    showProfile(e) {
        e.preventDefault();
        this.setState({['profile']: !this.state['profile']}, () => {
            document.addEventListener('mousedown', this.closeProfile)
        })
    }
    
    closeProfile(e) {
        if (!this.dropdownProfile.contains(e.target)) {
            this.setState({ profile: false }, () => {
                document.removeEventListener('mousedown', this.closeProfile);
            });
        }
    }
    
    render() {
        const boards = this.props.boards;
        const authorId = this.props.authorId;

        const popBoards = this.state['clicked'] ? 
        (
            <div className="pop-boards" ref={(element) => {this.dropdownMenu = element;}}>
                <div className="pop-boards-head">
                    <h3>Personal Boards</h3>
                </div>
                <ul>
                    {boards.map(board => {
                        if(board.author_id === authorId) {
                            return(
                                <Link to={`/boards/${board.id}`} className="pop-boards-btn" key={board.id}><button>{board.board_name}</button></Link>
                            )
                        }
                    })}
                </ul>
            </div>
        ) : null;

        const profile = this.state['profile'] ? 
        (
            <div className="profile-menu-cont" ref={(element) => {this.dropdownProfile = element;}}>
                <div className="profile-menu">
                    <a href=""><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Upload&nbsp;Profile&nbsp;Picture</a>
                    <a href="https://github.com/kevinpark02/Dorello.git"><i className="fab fa-github"></i>&nbsp;&nbsp;Github</a>
                    <a href="https://www.linkedin.com/in/kevin-park-p-e-04286949/"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</a>
                    <button onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log&nbsp;Out</button>
                </div>
            </div>
        ) : null;

        const greeting = this.props.currentUser ? (
            <div className="navbar-logged">
                <div className="left-buttons">
                    <Link to="/feed"><button className="home-btn"><i className="fas fa-home fa-lg"></i></button></Link>
                    <button className="boards-btn" onClick={this.showMenu}><i className="fab fa-trello fa-lg"></i>&nbsp;&nbsp;Boards</button>
                    {/* {popBoards} */}
                </div>
                <div className="right-profile">
                    <p className="text-white">Welcome, {this.props.currentUser.email}</p>
                    {/* <button className="btn-white-logout text-blue" onClick={this.handleLogout}>Log&nbsp;Out</button> */}
                    <button className="profile-btn" onClick={this.showProfile}>{this.props.currentUser.email[0].toUpperCase()}</button>
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
                    {popBoards}
                    {profile}
                </div>
            )
        }
}

export default Greeting;