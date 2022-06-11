// import components
import ComponentsLogin from "./login"
import Logo from "../utility/logo";

const LoginPage = (props) => {

  return (
    <div className="login">
        <Logo />
        <ComponentsLogin callback={props.callback}/>
    </div>
  );
};

export default LoginPage;
