import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.removeSessionErrors();
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

      const errors = this.props.errors;

      return(
            <ul>
                {errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
      )
   }

  render() {
      const formType = this.props.formType;
      const linkType = formType === "Sign up" ? "login" : "signup"
      const otherLinkName = linkType === "login" ? "Have an account already? Please log in" : "Sign up for an account"
      const sessionHeading = formType === "Sign up" ? "Sign up for your account" : "Log in to Dorello"

      return(
          <div>
              <form onSubmit={this.handleSubmit} className="session-form-cont">
                  <div className="session-form">
                      {this.renderErrors()}
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

                        <Link className="session-form-alt" to={`/${linkType}`}>{otherLinkName}</Link>
                  </div>
              </form>
          </div>
      )
   }
}

export default SessionForm;