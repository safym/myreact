function HeaderLink(prop) {
    var idLink = "button_" + prop.name;

    return <a className="header_button" id={idLink} role="button" href={prop.href}> {prop.name} </a>
  }
  
  export default HeaderLink;  