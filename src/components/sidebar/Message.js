function Message(props) {
  var Messageid = "Sidebar_message" + props.type;

  if (props.type == "Date") {
    return (
      <div className="Sidebar_message" id={Messageid}>
        <p>6 June 2022</p>
        <p>18:06:23</p>
      </div>
    );
  }

  if (props.type == "Weather") {
    return (
      <div className="Sidebar_message" id={Messageid}>
        <p>⛅ +22 C°</p>
      </div>
    );
  }
  return (
    <div className="Sidebar_message" id={Messageid}>
      <p>Undefined</p>
    </div>
  );
}

export default Message;
