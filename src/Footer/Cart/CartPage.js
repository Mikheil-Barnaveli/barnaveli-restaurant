import React, { useEffect, useState } from "react";
import "./CartPage.css";
import SingleCartProduct from "../../Header/HeaderComponents/Cart/components/components/components/SingleCartProduct";
import CheckoutBtn from "../../Header/HeaderComponents/Cart/components/components/components/CheckoutBtn";

function CartPage(props) {
  const [totalSum, setTotalSum] = useState(
    props.data.reduce((sum, obj) => sum + obj.total, 0)
  );

  function calculateSum() {
    setTotalSum(props.data.reduce((sum, obj) => sum + obj.total, 0));
    if (props.data.length === 0) {
      setTotalSum(0);
    }
  }

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
            calculateSum={calculateSum}
            cartData={props.cartData}
            setTotalSum={setTotalSum}
          />
        );
      })}
      <CheckoutBtn
        updatedQuantity={props.updatedQuantity}
        totalSum={totalSum}
        calculateSum={calculateSum}
      />
    </div>
  );
}

export default CartPage;
