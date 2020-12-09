import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
      return (e) => {
          this.setState({ [type]: e.target.value })
      };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
      return(
          <ul>
              {this.props.errors.map((error, i) => (
                  <li key={i}>
                      {error}
                  </li>
              ))}
          </ul>
      )
   }

  render() {
      const formType = this.props.formType;
      const linkType = formType === "signup" ? "login" : "signup"
      const sessionHeading = formType === "Sign up" ? "Sign up for your account" : "Log in to Trello"

      return(
          <div>
              {this.renderErrors()}
              <form onSubmit={this.handleSubmit} className="session-form-cont">
                  <div className="session-form">
                        <h4 className="session-form-title">{sessionHeading}</h4>
            
                        <input type="text"
                                value={this.state.username}
                                placeholder="Enter email"
                                onChange={this.handleInput('email')}/>
                    

                    
                        <input type="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handleInput('password')}/>
                
        
                        <input type="submit" value={formType} className ="btn-green"/>
                  </div>
              </form>
          </div>
      )
   }
}

export default SessionForm;