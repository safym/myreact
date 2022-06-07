
// import images
import img_logo from '../img/icons/fox.png';

const Header = () => {
    return(
    <div className="Header">
    <a className="header_button" id="button_logo" role="button" href="">
      <img src={img_logo} alt="This is logo" /> 
    </a>  
    <nav className="buttons_nav">
      <a className="header_button" id="button_home" role="button" href="">Home</a>
      <a className="header_button" id="button_news" role="button" href="">News</a> 
      <a className="header_login" role="button" href="">Login</a>
    </nav>
  </div>);
  }

  export default Header;