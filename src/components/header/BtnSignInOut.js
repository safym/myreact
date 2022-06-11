// import modules
import {NavLink} from "react-router-dom";

function BtnSignInOut(prop) {
  if (prop.name == "Sign out") {
    localStorage.clear();
  }

  if (prop.visible == true) {
    return <NavLink className="header_button" id="button_login" role="button" to={prop.href}> {prop.name} </NavLink>
  }
}
  
export default BtnSignInOut;  