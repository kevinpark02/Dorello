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

      return(
          <div>
              {this.renderErrors()}
              <form onSubmit={this.handleSubmit} className="session-form">
                <h2>Please {formType} or&nbsp;
                    <span><Link to={`/${linkType}`}>{linkType}</Link></span>
                </h2>
        
                      <input type="text"
                             value={this.state.username}
                             placeholder="Enter email"
                             onChange={this.handleInput('email')}/>
                

                  
                      <input type="password"
                             value={this.state.password}
                             placeholder="Enter password"
                             onChange={this.handleInput('password')}/>
            
    
                  <input type="submit" value={formType} className ="submit-btn"/>
              </form>
          </div>
      )
   }
}

export default SessionForm;