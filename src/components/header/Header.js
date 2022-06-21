// import components
import HeaderLink from "./Link";
import BtnSignIn from "./BtnSignIn";
import BtnSignOut from "./BtnSignOut";
import Logo from "../utility/logo";

const Header = (props) => {
  return (
    <div className="Header">
      <a id="button_logo" role="button" href="">
        <Logo />
      </a>
      <nav className="buttons_nav">
        <HeaderLink name="Home" href="/home" visible={true} />
        <HeaderLink name="News" href="/news" visible={true} />
        <HeaderLink name="Profile" href="/profile" visible={props.auth} />
        <BtnSignIn name="Sign in" href="/login" visible={!props.auth} />
        <BtnSignOut name="Sign out" href="/home" callback={props.callback} visible={props.auth} />
      </nav>
    </div>
  );
};

export default Header;
