import React from 'react'
import './BurgerNavTemplate.css'

function BurgerNavTemplate(props) {
  return (
    <>
    
    <div id='burger-template-div' style={{width:props.burgerNav}}>
        <ul id='burger-nav-ul'>
        <li className='burger-nav-list-item'>Home</li>
        <li className='burger-nav-list-item'>Contact</li>
        <li className='burger-nav-list-item'>Menu</li>
        </ul>
      
    </div>
    </>
  )
}

export default BurgerNavTemplate