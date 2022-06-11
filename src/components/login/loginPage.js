// import components
import ComponentsLogin from "./login"
import Logo from "../utility/logo";

const LoginPage = (props) => {
  if (props.auth) {
    return (
      // <div className="login">
        <h1 className="authMessage" >You're signed in!</h1>
      // </div>
    )
  }

  return (
    <div className="login">
        <Logo />
        <ComponentsLogin callback={props.callback}/>
    </div>
  );
};

export default LoginPage;
