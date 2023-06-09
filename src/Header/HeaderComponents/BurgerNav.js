import React from 'react'
import BurgerNavTemplate from './BurgerNavTemplate'

function BurgerNav(props) {
  return (
    <BurgerNavTemplate burgerNav={props.burgerNav} burgerNavBtn={props.burgerNavBtn}/>
  )
}

export default BurgerNav