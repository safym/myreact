
// import images
import img_logo from '../../img/icons/fox.png';
import HeaderLink from './Link';
import BtnLogin from './BtnLogin';

const Header = () => {
    return(
    <div className="Header">
    <a className="header_button" id="button_logo" role="button" href="">
      <img src={img_logo} alt="This is logo" /> 
    </a>  
    <nav className="buttons_nav">
      <HeaderLink name="Home" href="HomeTest" />
      <HeaderLink name="News" href="NewsTest" />
      <BtnLogin name="Login" href="LoginTest" />
    </nav>
  </div>);
  }

  export default Header;