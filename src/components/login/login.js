// import components
import InputLoginPassword from "./inputLoginPassword";
import ButtonSignin from "./buttonSignin";
import MyInput from "./CssMuiInputs";	
import { Component, useState } from "react";

class ComponentsLogin extends Component {
  state = {
    user: "",
    password: ""
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    console.log();

    this.setState({ [input.name]: value });
  }

  render() {
    return (
      <div className="LoginPassword">
        <MyInput name="login" />
        <MyInput name="password" />
        <ButtonSignin />
      </div>
    );
  }
}

// const ComponentsLogin = () => {
//   return (
//     <div className="LoginPassword">
//       <MyInput name="login" />
//       <MyInput name="password" />
//       <ButtonSignin />
//     </div>
//   );
// };

export default ComponentsLogin;
