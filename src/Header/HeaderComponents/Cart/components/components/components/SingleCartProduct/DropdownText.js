import React, { useEffect, useState } from "react";
import "./DropdownText.css";

function DropdownText(props) {

  const [amountNumber, setAmountNumber] = useState(1);
  function handlePlusAmount() {
    setAmountNumber((prevState) => prevState + 1);
  }
  function handleMinusAmount() {
    if (amountNumber > 1) {
      setAmountNumber((prevState) => prevState - 1);
    }
  }




  let totalPrice = props.data.price * amountNumber;

  useEffect(() => {
    // Calculate total price
    const newTotalPrice =   totalPrice;

    // Call the updateTotalPrice callback function passed from CartPage
    props.updateTotalPrice(newTotalPrice);
  }, [amountNumber, props.data.price, props.updateTotalPrice]);



  return (
    <div id="dropdown-product-description">
      <div id="cart-item-name-div">
        <h3 id="dropdown-product-name">{props.data.name}</h3>
      </div>
      <div id="cart-item-price-amount">
        <p id="dropdown-product-price">{props.data.price} $</p>
        <div id="menu-item-page-amount-btns">
          <button onClick={props.handleMinusAmount} className="quantity-btn">
            -
          </button>
          <p className="quantity">{props.amountNumber}</p>
          <button onClick={props.handlePlusAmount} className="quantity-btn">
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
