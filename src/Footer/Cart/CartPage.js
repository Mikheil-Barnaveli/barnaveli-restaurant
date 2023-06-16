import React, { useEffect, useState } from "react";
import "./CartPage.css";
import SingleCartProduct from "../../Header/HeaderComponents/Cart/components/components/components/SingleCartProduct";
import CheckoutBtn from "../../Header/HeaderComponents/Cart/components/components/components/CheckoutBtn";


function CartPage(props) {





  return (
    <div id="cart-page-div">
      <h1 id="cart-page-h1">Your Cart:</h1>
      {props.data.map((el, key) => {
        return (
          <SingleCartProduct
            data={el}
            key={el.id}
            removeItem={props.removeItem}
            updateTotalPrice={props.updateTotalPrice}
            totalPrice={props.totalPrice}
          />
        );
      })}
      <CheckoutBtn updatedQuantity={props.updatedQuantity}/>
    </div>
  );
}

export default CartPage;
