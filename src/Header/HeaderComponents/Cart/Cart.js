import React, { useState } from "react";
import "./CartTemplate.css";
import cart from "../../../assets/images/cart.png";
import cart2 from "../../../assets/images/cart2.png";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  let navigate = useNavigate();
  const [currentCartLogo, setCurrentCartLogo] = useState(cart);

  function handleCartLogoChange() {
    setCurrentCartLogo(cart2);
  }
  function handleCartLogoChange2() {
    setCurrentCartLogo(cart);
  }

  return (
    <div
      className="cart-div"
      onClick={() => navigate(`/Cart`)}
      onMouseOver={handleCartLogoChange}
      onMouseLeave={handleCartLogoChange2}
    >
      <img src={currentCartLogo} id="cart-image"></img>
    </div>
  );
}

export default Cart;
