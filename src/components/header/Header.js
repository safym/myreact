// import components
import HeaderLink from "./Link";
import BtnSignInOut from "./BtnSignInOut";
import Logo from "../utility/logo";

const Header = () => {
  var authorized = localStorage.getItem('authorized') === 'true';
  console.log(authorized)

  return (
    <div className="Header">
      <a id="button_logo" role="button" href="">
        <Logo />
      </a>
      <nav className="buttons_nav">
        <HeaderLink name="Home" href="/home" visible={true}/>
        <HeaderLink name="News" href="/news" visible={true}/>
        <HeaderLink name="Profile" href="/profile" visible={authorized}/>
        <BtnSignInOut name="Sign in" href="/login" visible={!authorized}/>
        <BtnSignInOut name="Sign out" href="/home" visible={authorized}/>
      </nav>
    </div>
  );
};

export default Header;
