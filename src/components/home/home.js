// import components
import Logo from "../utility/logo";
import Article from "./article";

const HomePage = () => {
  return (
    <div className="Content">
      <div className="Card">
        <div className="logo">
          <Logo />
        </div>

        <Article />
      </div>
    </div>
  );
};

export default HomePage;
