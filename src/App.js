// import components
// import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import HomePage from "./components/home/home";
import Profile from "./components/profile/profile";
import Login from "./components/login/loginPage";
import {NavLink} from "react-router-dom";
import Logo from "./components/utility/logo";

// import styles
import "./styles/App.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/content.css";
import "./styles/home.css";
import "./styles/login.css";
import "./styles/profile.css";
import "./styles/input.css";
import "./styles/button.css";

// import modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalState } from 'react-hooks-global-state';
import React, { StrictMode, useState } from 'react';

const initialState = {
  authorized: 'false'
};

const { useGlobalState } = createGlobalState(initialState);

function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header />
        <Sidebar />
        <div className="WrapperContent">
          <StrictMode>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/news" element={<Content />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </StrictMode>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

const Header = () => {
  // var LSauthorized = localStorage.getItem('authorized') === 'true';
  // console.log(LSauthorized);

  var [value, update] = useGlobalState('authorized');
  var visibleDefault = 'true';

  return (
    <div className="Header">
      <a id="button_logo" role="button" href="">
        <Logo />
      </a>
      <nav className="buttons_nav">
        <HeaderLink name="Home" href="/home" visible={visibleDefault}/>
        <HeaderLink name="News" href="/news" visible={visibleDefault}/>
        <HeaderLink name="Profile" href="/profile" visible={value}/>
        
        <NavLink className="header_button" onClick={() => update(value = 'true')} id="button_login" role="button" to="/login"> Sign in </NavLink>
        <NavLink className="header_button" onClick={() => update(value = 'false')} id="button_login" role="button" to="/home"> Sign out </NavLink>

        {/* <BtnSignInOut name="Sign in" href="/login" visible={visibleDefault}/>
        <BtnSignInOut name="Sign out" href="/home" visible={visibleDefault}/> */}
        
      </nav>
    </div>
  );
};

function HeaderLink(prop) {
  if (prop.visible == 'true') {
    var idLink = "button_" + prop.name;

    return <NavLink className="header_button" id={idLink} role="button" to={prop.href}> {prop.name} </NavLink>
  }
}  

function BtnSignInOut(prop) {
  // if (prop.name == "Sign out") {
  //   localStorage.clear();
  // }

  if (prop.visible == "true") {
    return <NavLink className="header_button" id="button_login" role="button" to={prop.href}> {prop.name} </NavLink>
  }
}

export default App;
