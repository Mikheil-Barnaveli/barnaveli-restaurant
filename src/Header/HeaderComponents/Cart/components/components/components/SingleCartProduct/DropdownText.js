import React, { useEffect, useState } from "react";
import "./DropdownText.css";

function DropdownText(props) {

  const [amountNumber, setAmountNumber] = useState(props.data.amount);
  function handlePlusAmount() {
    props.data.total += props.data.price
    props.data.amount += 1
    setAmountNumber(props.data.amount)
    props.calculateSum()
  }
  function handleMinusAmount() {
    if (amountNumber > 1) {
      props.data.total -= props.data.price
      props.data.amount -= 1
    setAmountNumber(props.data.amount)
    props.calculateSum()
    }
  }



  let totalPrice = props.data.price * amountNumber;




  return (
    <div id="dropdown-product-description">
      <div id="cart-item-name-div">
        <h3 id="dropdown-product-name">{props.data.name}</h3>
      </div>
      <div id="cart-item-price-amount">
        <p id="dropdown-product-price">{props.data.price} $</p>
        <div id="menu-item-page-amount-btns">
          <button onClick={handleMinusAmount} className="quantity-btn">
            -
          </button>
          <p className="quantity">{props.data.amount}</p>
          <button onClick={handlePlusAmount} className="quantity-btn">
            +
          </button>
        </div>
      </div>
      <div id="total-price-div">
        <p><span id="total-price-span">Total:</span>{totalPrice} $</p>
      </div>
    </div>
  );
}

export default DropdownText;
