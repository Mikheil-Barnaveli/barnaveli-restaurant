import React from 'react';
import Cart from './HeaderComponents/Cart/Cart';
import Navigation from './HeaderComponents/Navigation';
import './HeaderTemplate.css';
import BurgerNav from './HeaderComponents/BurgerNav';
import Dropdown from './HeaderComponents/Cart/components/Dropdown';


function HeaderTemplate(props) {
  return (
    <div id='the-header-template'>
      <h1>Barnaveli Bar</h1>
      <div id='header-nav-div'>
        <Navigation {...props}/>
      </div>
      <Cart {...props}/>
      <button onClick={props.burgerNavBtn} id='burger-nav-button'>Nav</button>
      {props.isDropDownVisible && <Dropdown data={{}} removeItem={{}}/>}
      <BurgerNav {...props}/>
    </div>
  )
}

export default HeaderTemplate