import React, { useState } from "react";
import "./MenuItemPage.css";
import { useNavigate, useParams } from "react-router-dom";
import bgImage from "../assets/images/background-img.jpg";

function MenuItemPage(props) {
  const params = useParams();
  let navigate = useNavigate();

  const element = props.data.find((el) => {
    return el.id === Number(params.menuItem);
  });

  // console.log(element);

  return (
    <div id="menu-item-page-div">
      <div id="menu-item-page-image-div">
        <img src={element.image} id="menu-item-page-image"></img>
      </div>
      <div id="menu-item-page-info-div">
        <div id="menu-item-page-description-div">
          <h2 className="menu-item-page-info-h2">{element.name}</h2>
          <h2 className="menu-item-page-info-h2">
            Price:{" "}
            <span className="menu-item-page-info-span">{element.price}</span>$
          </h2>
          <h2 className="menu-item-page-info-h2">
            Description:{" "}
            <span className="menu-item-page-info-span">
              {element.description}
            </span>
          </h2>
        </div>
        <div id="menu-item-page-button-div">
          <div id="menu-item-page-amount-btns">
            <button onClick={props.handleMinusAmount} className="quantity-btn">
              -
            </button>
            <p className="quantity">{props.amountNumber}</p>
            <button onClick={props.handlePlusAmount} className="quantity-btn">
              +
            </button>
          </div>
          <button
            className="menu-item-page-button"
            onClick={() => {
              props.setCartData(prevState => [...prevState, element]);
              // props.handleCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItemPage;
