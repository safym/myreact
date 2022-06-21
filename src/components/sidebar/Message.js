import Date from "./Date";
import Clock from "./Clock";

function Message(props) {
  var Messageid = "Sidebar_message" + props.type;

  if (props.type == "Date") {
    return (
      <div className="Sidebar_message" id={Messageid}>
        <Date />
      </div>
    );
  }
  if (props.type == "Time") {
    return (
      <div className="Sidebar_message" id={Messageid}>
        <Clock />
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
