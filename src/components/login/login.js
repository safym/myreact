// import components
import InputLoginPassword from "./inputLoginPassword";
import ButtonSignin from "./buttonSignin";

const ComponentsLogin = () => {
  return (
    <div className="LoginPassword">
      <InputLoginPassword type="Login" />
      <InputLoginPassword type="Password" />
      <ButtonSignin />
    </div>
  );
};

export default ComponentsLogin;
