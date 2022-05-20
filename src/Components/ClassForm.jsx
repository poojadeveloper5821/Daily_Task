import React, { Component } from "react";

export class ClassForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formValidation = () => {
    const { username, password } = this.state;
    let isValid = true;
    const errors = {};
    if (username.trim().length < 6) {
      errors.usernameLength = "Username msut be of length 6 or higher";
      isValid = false;
    }
    if (!username.includes("$")) {
      errors.username$ = "Username msut have a $";
      isValid = false;
    }
    if (password.trim().length < 8) {
      errors.passwordLength = "Password msut be of length 8 or higher";
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    if(isValid){
        //send username and password
        this.setState({username:" ",password:" "})
    }
  };
  render() {
    const { username, password, errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <br />
        <button type="submit">Login</button>
        {Object.keys(errors).map((key) => {
          return <div style={{color:"red"}}key={key}>{errors[key]}</div>;
        })}
      </form>
    );
  }
}

export default ClassForm;
