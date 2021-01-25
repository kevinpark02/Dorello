import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BoardShowContainer from '../boards/board_show_container';
import ProfileForm from "../profiles/profile_form";

class Greeting extends React.Component {
    constructor(props) {
        super(props)

        this.state = { clicked: false,
                       profile: false
                     };
        
        this.handleClick = this.handleClick.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showProfile = this.showProfile.bind(this);
        this.closeProfile = this.closeProfile.bind(this);
        this.uploadProfile = this.uploadProfile.bind(this);
    }

    handleClick(id) {
        return e => {
            e.preventDefault();
            this.props.fetchBoard(id)
                .then(() => this.props.history.push(`/boards/${id}`));
            this.setState({['clicked']: !this.state['clicked']});
        }
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

    uploadProfile(e){
        e.preventDefault();
        this.props.openModal('profile', null)
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
                                <button key={board.id} onClick={this.handleClick(board.id)}>{board.board_name}</button>
                                // <Link to={`/boards/${board.id}`} onClick={this.handleClick} className="pop-boards-btn" key={board.id}>
                                //     <button>{board.board_name}</button>
                                // </Link>
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
                    <a href="" onClick={this.uploadProfile}><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Upload&nbsp;Profile&nbsp;Picture</a>
                    <a href="https://www.linkedin.com/in/kevin-park-04286949/" target="_blank"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</a>
                    <a href="https://github.com/kevinpark02/Dorello.git" target="_blank"><i className="fab fa-github"></i>&nbsp;&nbsp;Github</a>
                    <a href="https://angel.co/u/kevin-park-33" target="_blank"><i class="fab fa-angellist"></i>&nbsp;&nbsp;Angelist</a>
                    <a href="https://www.kevpark.me/" target="_blank"><i class="fas fa-images"></i>&nbsp;&nbsp;Portfolio</a>
                    <button onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log&nbsp;Out</button>
                    {/* <ProfileForm /> */}
                </div>
            </div>
        ) : null;

        // console.log(this.props.currentUser.photoUrl);

        const profilePic = (this.props.currentUser && (this.props.currentUser.photoUrl !== undefined)) ? 
            (<img className="profile-pic-img" src={this.props.currentUser.photoUrl}/>) :
                !this.props.currentUser ? null :
                    this.props.currentUser.email[0].toUpperCase() ;

        const greeting = this.props.currentUser ? (
            <div className="navbar-logged">
                <div className="left-buttons">
                    <Link to="/feed"><button className="home-btn"><i className="fas fa-home fa-lg"></i></button></Link>
                    <button className="boards-btn" onClick={this.showMenu}><i className="fab fa-trello fa-lg"></i>&nbsp;&nbsp;Boards</button>
                    {/* {popBoards} */}
                </div>
                <Link to="/" className="dorello-link"><h1 className="dorello-white"><span>&nbsp;</span>&nbsp;Dorello</h1></Link>
                <div className="right-profile">
                    <p className="text-white">Welcome, {this.props.currentUser.email}</p>
                    {/* <button className="btn-white-logout text-blue" onClick={this.handleLogout}>Log&nbsp;Out</button> */}
                    <button className="profile-btn" onClick={this.showProfile}>{profilePic}</button>
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