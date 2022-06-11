// import components
import MyButton from "./TESTmyButton";
import { Component, useState } from "react";
import getUsers from "../../misc/accounts";

const ComponentsLogin = (props) =>  {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // state = {
  //   login: "",
  //   password: ""
  // };

  const handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    if (input.name == "login") {
      setLogin(value);
    }
    if (input.name == "password") {
      setPassword(value);
    }

  }

  const checkAccount = () => {
    var users= getUsers();
    
    for (let entry of users) {
      if (login == entry[0] && password == entry[1]) {

        return true;
      }
    }

    return false; 
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (checkAccount()) {
      
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('authorized', 'true');

      props.callback(checkAccount());
    }
  };
  
    return (
      <form className="LoginPassword" onSubmit={handleFormSubmit}>
        <input 
          className='styledInput' 
          id="login"
          placeholder='Login' 
          name='login' 
          value={login} 
          onChange={handleChange} 
        />

        <input 
          className='styledInput'
          id="password"
          name='password' 
          type='password'
          placeholder='Password'
          value={password} 
          onChange={handleChange} 
        />
        
        <button className='myButton' type="submit">
          Sign in
        </button>
      </form>
    );

}

export default ComponentsLogin;
