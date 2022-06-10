// import components
import HeaderLink from "./Link";
import BtnLogin from "./BtnLogin";
import Logo from "../utility/logo";

const Header = () => {
  var authorized = localStorage.getItem('authorized') === 'true';
  console.log(authorized)

  return (
    <div className="Header">
      <a className="header_button" id="button_logo" role="button" href="">
        <Logo />
      </a>
      <nav className="buttons_nav">
        <HeaderLink name="Home" href="/home" visible={true}/>
        <HeaderLink name="News" href="/news" visible={true}/>
        <HeaderLink name="Profile" href="/profile" visible={authorized}/>
        <BtnLogin name="Login" href="/login" visible={!authorized}/>
      </nav>
    </div>
  );
};

export default Header;
