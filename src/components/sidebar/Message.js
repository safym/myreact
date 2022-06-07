function Message(prop) {

    var Messageid = "Sidebar_message" + prop.type;

    if (prop.type == "Date") {
      return  (<div className="Sidebar_message" id={Messageid}>
                <p>6 June 2022</p>
                <p>18:06:23</p>
              </div>)
    }

    if (prop.type == "Weather") {
      return  (<div className="Sidebar_message" id={Messageid}>
                <p>⛅ +22 C°</p>
              </div>)
    }
      return  <div className="Sidebar_message" id={Messageid}>
                <p>Undefind</p>
              </div> 
  }

export default Message;