// import components
import { render } from "@testing-library/react";
import { Component } from "react";
import MyInput from "./CssMuiInputs";

// class InputLoginPassword extends Component {

//   state = {
//     login: "",
//     password: ""
//   };

//   constructor(props) {
//     super(props);

//     if (this.props.name == "login") {
//       this.type = "text";
//       this.class = "username";
//       this.id = this.props.name;
//       this.label = this.props.name;
//       this.value = this.state.login;
//     }

//     else if (this.props.name == "password") {
//       this.type = "password";
//       this.class = "password"
//       this.id = this.props.name;
//       this.label = this.props.name;
//       this.value = this.state.password;
//     }

//     this.name = this.props.name;
//   }
  
//   handleChange = (event) => {
//     const input = event.target;
//     const value = input.value;

//     console.log(value);
//     this.setState({ [input.name]: value });
//     console.log(this.state);
//   }    

//   render() {
//     return (
//       <div className={this.class}>
//           <CssTextField 
//             label={this.label} 
//             type={this.type} 
//             id={this.id} 
//             margin="dense" 
//             name={this.name} 
//             onChange={this.handleChange} 
//           />
//         </div>
//     );
//   }
// };

// export default InputLoginPassword;
