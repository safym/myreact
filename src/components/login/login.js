// import components
import MyButton from "./TESTmyButton";
import { Component, useState } from "react";
import getUsers from "../../misc/accounts";

class ComponentsLogin extends Component {
  state = {
    login: "",
    password: ""
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    console.log(value);

    this.setState({ [input.name]: value }, () => console.log(this.state.login));

  }

  checkAccount = () => {
    var users= getUsers();
    
    for (let entry of users) {
      if (this.state.login == entry[0] && this.state.password == entry[1]) {

        return true;
      }
    }

    return false; 
  };

  handleFormSubmit = (event) => {
    // event.preventDefault();
    if (this.checkAccount()) {
      const { login, password } = this.state;
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('authorized', 'true');
    }
  };

  render() {
  
    return (
      <form className="LoginPassword" onSubmit={this.handleFormSubmit}>
        <input 
          className='styledInput' 
          placeholder='Login' 
          name='login' 
          value={this.state.login} 
          onChange={this.handleChange} 
        />

        <input 
          className='styledInput'
          name='password' 
          type='password'
          placeholder='Password'
          value={this.state.password} 
          onChange={this.handleChange} 
        />
        
        <button className='myButton' type="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default ComponentsLogin;
