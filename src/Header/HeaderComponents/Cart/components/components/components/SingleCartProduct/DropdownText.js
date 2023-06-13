import React from 'react'
import './DropdownText.css'

function DropdownText(props) {

  let totalPrice = props.data.price * props.data.quantity


  return (
    <div id='dropdown-product-description'>
      <p id='dropdown-product-name'>
        {props.data.name}
        </p>
      <p id='dropdown-product-price'>
        {props.data.price}  x {props.data.quantity}
        <span id='dropdown-product-total-price'> {totalPrice}
        </span>
      </p>
    </div>
  )
}

export default DropdownText