import React from 'react'
import './CheckoutBtn.css'

function CheckoutBtn(props) {
  return (
    <div id='checkout-div'>
      <h1 id='checkout-total-h1'><span id='checkout-total-span'>Total: </span>{props.updatedQuantity}$</h1>
    <button id='chechkout-btn'>Checkout</button>
    </div>
  )
}

export default CheckoutBtn