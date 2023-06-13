import React from 'react'
import './CartTemplate.css'
import cart from '../../../assets/images/icon-cart.svg'

function Cart(props) {
  return (
    <div className='cart-div' onClick={props.handleCart}>
        <img src={cart}></img>
    </div>
  )
}

export default Cart