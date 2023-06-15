import React from 'react'
import './DropdownText.css'

function DropdownText(props) {

  let totalPrice = props.data.price * props.quantity
  // console.log(props.data, 'es aris dropdown data');

  return (
    <div id='dropdown-product-description'>
      <p id='dropdown-product-name'>
        {props.data.name}
        </p>
      <p id='dropdown-product-price'>
        {props.data.price}  x {props.quantity}
        <span id='dropdown-product-total-price'> Total:{totalPrice}
        </span>
      </p>
    </div>
  )
}

export default DropdownText