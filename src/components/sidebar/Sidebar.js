import Message from "./Message";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Message type="Date" />
      <Message type="Weather" />
    </div>
  );
};

export default Sidebar;
