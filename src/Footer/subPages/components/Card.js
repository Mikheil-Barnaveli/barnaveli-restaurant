import React from "react";
import "./CardTemplate.css";
import { useNavigate, useParams } from "react-router-dom";

function Card(props) {

  const params = useParams();
  let navigate = useNavigate();


  const element = props.menuData.find((el) => {
    return el.id === props.id;
  });



  return (
    <>
      <div
        id="card-div"
      >
        <div
          id="menu-image-div"
          style={{ backgroundImage: `url(${props.image})` }}
          onClick={props.navigateIT}
        ></div>
        <div id="info-div">
          <h1 id="menu-item-name">
            {props.name}
          </h1>
          <div id="detail-info">
            <h2 className="detail-info">
              Category:{" "}
              <span className="props-span">
                {props.category}
              </span>
            </h2>
            <h2 className="detail-info">
              Price:{" "}
              <span className="props-span">
                {props.price}$
              </span>
            </h2>
          </div>
          <div id="card-button-div">
            <button id="add-to-cart-btn" className="card-btn" onClick={() => {
              if (!props.cartData.some(item => item.id === element.id)) {
                props.setCartData(prevState => [...prevState, element]);
                
              }
            }}>
              Add to Cart
            </button>
            <button
              id="more-details-page-btn"
              className="card-btn"
              onClick={props.navigateIT}
            >
              more details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
