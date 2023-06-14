import React from "react";
import "./CardTemplate.css";
import { useNavigate, useParams } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();

  return (
    <>
      <div
        id="card-div"
        // onClick={props.navigateIT}
        style={{ backgroundColor: props.BGcolor }}
      >
        <div
          id="menu-image-div"
          style={{ backgroundImage: `url(${props.image})` }}
          // onClick={props.checkname}
        ></div>
        <div id="info-div">
          <h1 id="menu-item-name" style={{ color: props.infoColor }}>
            {props.name}
          </h1>
          <div id="detail-info">
            <h2 className="detail-info" style={{ color: props.infoColor }}>
              Category:{" "}
              <span className="props-span" style={{ color: props.infoColor }}>
                {props.category}
              </span>
            </h2>
            <h2 className="detail-info" style={{ color: props.infoColor }}>
              Price:{" "}
              <span className="props-span" style={{ color: props.infoColor }}>
                {props.price}$
              </span>
            </h2>
          </div>
          <div id="card-button-div">
            <button id="add-to-cart-btn" className="card-btn">
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
