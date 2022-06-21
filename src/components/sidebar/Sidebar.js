import Message from "./Message";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Message type="Date" />
      <Message type="Time" />
    </div>
  );
};

export default Sidebar;
