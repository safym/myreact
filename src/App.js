// import components
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import HomePage from "./components/home/home";
import Profile from "./components/profile/profile";
import Login from "./components/login/loginPage";

// import styles
import "./styles/App.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/content.css";
import "./styles/home.css";
import "./styles/login.css";
import "./styles/profile.css";

// import modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header />
        <Sidebar />
        <div className="WrapperContent">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<Content />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Content />
          <HomePage /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
