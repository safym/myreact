// import components
import ComponentsLogin from "./login"
import Logo from "../utility/logo";
import {useNavigate} from "react-router-dom"

const LoginPage = (props) => {
  const history = useNavigate();

  if (props.auth) {
    history('/profile');

    return (
        <h1 className="infoMessage" >You're signed in!</h1>
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
