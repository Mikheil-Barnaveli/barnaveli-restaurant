import React from 'react'
import './BurgerNavTemplate.css'
import { useNavigate } from 'react-router-dom';

function BurgerNavTemplate(props) {

  let navigate = useNavigate();

  return (
    <>
    
    <div id='burger-template-div' style={{width:props.burgerNav}}>
        <ul id='burger-nav-ul'>
        <li className='burger-nav-list-item' onClick={() => navigate(`/barnaveli-restaurant`)}>Home</li>
        <li className='burger-nav-list-item' onClick={() => navigate(`/Contact`)}>Contact</li>
        <li className='burger-nav-list-item' onClick={() => navigate(`/Menu`)}>Menu</li>
        </ul>
      
    </div>
    </>
  )
}

export default BurgerNavTemplate