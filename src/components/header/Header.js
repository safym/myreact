// import components
import HeaderLink from "./Link";
import BtnLogin from "./BtnLogin";
import Logo from "../utility/logo";

const Header = () => {
  return (
    <div className="Header">
      <a className="header_button" id="button_logo" role="button" href="">
        <Logo />
      </a>
      <nav className="buttons_nav">
        <HeaderLink name="Home" href="/home" />
        <HeaderLink name="News" href="/news" />
        <BtnLogin name="Login" href="/login" />
      </nav>
    </div>
  );
};

export default Header;
