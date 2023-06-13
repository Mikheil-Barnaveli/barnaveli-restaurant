import React from 'react'
import './NavigationTemplate.css'

function NavigationTemplate(props) {
  return (
    <ul id='nav-ul'>
      <li className='nav-list-item' onClick={props.navigateHome}>Home</li>
      <li className='nav-list-item' onClick={props.navigateContact} >Contact</li>
      <li className='nav-list-item' onClick={props.navigateMenu}>Menu</li>
    </ul>
  )
}

export default NavigationTemplate