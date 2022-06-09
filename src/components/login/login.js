// import components
import InputLoginPassword from "./inputLoginPassword";
import ButtonSingin from "./buttonSingin";

const ComponentsLogin = () => {
  return (
    <div className="LoginPassword">
      <InputLoginPassword type="Login" />
      <InputLoginPassword type="Password" />
      <ButtonSingin />
    </div>
  );
};

export default ComponentsLogin;
