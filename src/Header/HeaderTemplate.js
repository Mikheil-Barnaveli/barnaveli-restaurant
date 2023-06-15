import React, { useState } from "react";
import Cart from "./HeaderComponents/Cart/Cart";
import Navigation from "./HeaderComponents/Navigation";
import "./HeaderTemplate.css";
import BurgerNav from "./HeaderComponents/BurgerNav";
import Dropdown from "./HeaderComponents/Cart/components/Dropdown";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import { useNavigate } from "react-router-dom";
import navBar from "../assets/images/burNav.png"
import navBar2 from "../assets/images/burNav2.png";

function HeaderTemplate(props) {
  let navigate = useNavigate();

  const [currentLogo, setCurrentLogo] = useState(logo);
  const [cartLogo, setCartLogo] = useState(navBar);

  function handleLogoChange() {
    setCurrentLogo(logo2);
  }
  function handleLogoChange2() {
    setCurrentLogo(logo);
  }
  function handleNavBarChange() {
    setCartLogo(navBar2);
  }
  function handleNavBarChange2() {
    setCartLogo(navBar);
  }

  return (
    <div id="the-header-template">
      <div id="logo-div">
        <img
          src={currentLogo}
          id="logo-image"
          onMouseOver={handleLogoChange}
          onMouseLeave={handleLogoChange2}
          onClick={() => navigate(`/barnaveli-restaurant`)}
        ></img>
      </div>
      <div id="header-nav-div">
        <Navigation {...props} />
      </div>
    
      <div id="cart-and-navbar-div">
      <Cart {...props} />
      <button onClick={props.burgerNavBtn} id="burger-nav-button">
        <img src={cartLogo}
          onMouseOver={handleNavBarChange}
          onMouseLeave={handleNavBarChange2}
        ></img>
      </button>
      {props.isDropDownVisible && <Dropdown data={props.data} removeItem={{}} />}
      <BurgerNav {...props} />
      </div>
    </div>
  );
}

export default HeaderTemplate;
