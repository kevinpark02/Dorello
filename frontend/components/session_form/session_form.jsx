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
              <form onSubmit={this.handleSubmit}>
                <h2>Please {formType} or &nbsp;
                    <span><Link to={`/${linkType}`}>{linkType}</Link></span>
                </h2>
                  <label>Email:
                      <input type="text"
                             value={this.state.username}
                             onChange={this.handleInput('email')}/>
                  </label>

                  <label>Password:
                      <input type="password"
                             value={this.state.password}
                             onChange={this.handleInput('password')}/>
                  </label>

                  <input type="submit" value={formType}/>
              </form>
          </div>
      )
   }
}

export default SessionForm;