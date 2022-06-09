// import modules
import {NavLink} from "react-router-dom";

function BtnLogin(prop) {
    return <NavLink className="header_login" id="button_login" role="button" to={prop.href}> {prop.name} </NavLink>
  }
  
export default BtnLogin;  