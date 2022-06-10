// import framework components
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});

class MyInput extends TextField {
  constructor(props) {
    super(props);

    if (this.props.name == "login") {
      this.type = "text";
      this.class = "username";
      this.id = this.props.name;
      this.label = this.props.name;
      this.value = this.state.login;
    }

    else if (this.props.name == "password") {
      this.type = "password";
      this.class = "password"
      this.id = this.props.name;
      this.label = this.props.name;
      this.value = this.state.password;
    }

    this.name = this.props.name;
  }

  render() {
    return (
      <div className={this.class}>
          <CssTextField 
            label={this.label} 
            type={this.type} 
            id={this.id} 
            margin="dense" 
            name={this.name} 
            onChange={this.handleChange} 
          />
        </div>
    );
  }
}

export default MyInput;
