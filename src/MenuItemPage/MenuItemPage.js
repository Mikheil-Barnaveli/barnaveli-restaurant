import React, { useState } from "react";
import "./MenuItemPage.css";
import { useNavigate, useParams } from "react-router-dom";
import bgImage from "../assets/images/background-img.jpg";

function MenuItemPage(props) {

  const params = useParams();
  let navigate = useNavigate();



  // console.log(params, "es aris paramsi");
  // console.log(props.data, "es aris propsi");


  const element = props.data.find((el) => {
    return el.id === Number(params.menuItem);
  });

  // const [myObject, setMyObject] = useState(element);
  // const [cartData, setCartData] = useState([]);
  // const handleCart = () => {

  //   // if (myObject.quantity > 0){}
  //   setCartData(prevState => [...prevState, myObject]);
  //   setMyObject(element)
  //   console.log(cartData);
  // };

  const [amountNumber, setAmountNumber] = useState(0)
  function handlePlusAmount() {
    setAmountNumber(prevState => prevState + 1)
  }
  function handleMinusAmount() {
    if(amountNumber > 0){
    setAmountNumber(prevState => prevState - 1)}
  }

  // console.log(element, "es aris elementis");

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
            <button
            onClick={handleMinusAmount}
              className="quantity-btn"
            >-</button>
            <p className="quantity">{amountNumber}</p>
            <button
            onClick={handlePlusAmount}
              className="quantity-btn"
            >+</button>
          </div>
          <button className="menu-item-page-button" onClick={{}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItemPage;
