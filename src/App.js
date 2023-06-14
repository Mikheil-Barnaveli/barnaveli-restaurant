import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Router, Route, Switch, Routes, useNavigate } from "react-router-dom";
import Menu from "./Footer/subPages/Menu";
import Contact from "./Footer/subPages/Contact";
import data from './menuData.json'

function App() {
  let navigate = useNavigate();

  console.log(data);

  const [isBurgerNavActive, setIsBurgerNavActive] = useState(false);

  let burgerNav;

  function handleBurgerNav() {
    setIsBurgerNavActive(!isBurgerNavActive);
  }
  if (isBurgerNavActive == false) {
    burgerNav = "0";
  } else {
    burgerNav = "60dvw";
  }

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const handleCartButtonClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <>
      <Header
        burgerNav={burgerNav}
        burgerNavBtn={handleBurgerNav}
        handleCart={handleCartButtonClick}
        isDropDownVisible={isDropDownVisible}
        navigateHome={() => navigate(`/barnaveli-restaurant`)}
        navigateContact={() => navigate(`/Contact`)}
        navigateMenu={() => navigate(`/Menu`)}
      />

      <Routes path="/barnaveli-restaurant" element={<Main data={data}/>}>
        <Route path="/barnaveli-restaurant" element={<Main data={data}/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu menuData={data}/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
