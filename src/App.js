import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';



function App() {

  const [isBurgerNavActive, setIsBurgerNavActive] = useState(false)

  let burgerNav;

  function handleBurgerNav () {
    setIsBurgerNavActive(!isBurgerNavActive)
  }
  if(isBurgerNavActive == false){
    burgerNav = "0"
  }else{
    burgerNav = "50dvw"
  }


  return (
    <>
    <Header 
    burgerNav={burgerNav}
    burgerNavBtn={handleBurgerNav}/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
