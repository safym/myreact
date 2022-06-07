function BtnLogin(prop) {
    return <a className="header_login" id="button_login" role="button" href={prop.href}> {prop.name} </a>
  }
  
  export default BtnLogin;  