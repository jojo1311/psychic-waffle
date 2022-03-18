import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static allowedChars = /[a-zA-Z0-9\- .:=;!%]/;
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.state = { password: '', passwordComment: null };
    this.logIt = this.logIt.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  logIt(event) {
    event.preventDefault();
    console.log('submit button clicked with password ' + this.state.password);
    
  }
  updatePassword(event) {
    //drop unallowable characters
    const newPassword = event.target.value.split('').filter(x => x.match(App.allowedChars)).join('');

    let comment;
    if (newPassword.length < 6) {
      comment = <p> Minimun length is 6 characters</p>;
    } else if (newPassword.length < 10) {
      comment = <p>Weak Password &mdash; longer passwords are more secure</p>;
    } else {
      comment = <p>Strong Password</p>;
    }
    this.setState({ password: newPassword, passwordComment: comment });
  }

  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form>
          
          <label>Password </label>
          <input type="password" value={this.state.password} onChange={this.updatePassword} /> <br />
          
          { this.state.passwordComment}
          <button onClick={this.logIt}>Submit password</button>
          
      
        </form>
      
      </div>
    )
  }

}

export default App;
