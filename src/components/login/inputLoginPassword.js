// import components
import CssTextField from "./CssMuiInputs";

const InputLoginPassword = (prop) => {
  if (prop.type == "Login") {
    return (
      <div className="username">
        <CssTextField label="Login" type="text" id="Login" margin="normal" />
      </div>
    );
  }

  if (prop.type == "Password") {
    return (
      <div className="password">
        <CssTextField
          label="Password"
          type="password"
          id="Password"
          margin="normal"
        />
      </div>
    );
  }
};

export default InputLoginPassword;
