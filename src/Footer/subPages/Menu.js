import React from "react";
import "./Menu.css";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  let navigate = useNavigate();

  // console.log(props.menuData);

  return (
    <div id="menu-div">
      {props.menuData.map((el, key) => {
       return <Card
          key={el.id}
          image={el.image}
          name={el.name}
          category={el.category}
          price={el.price}
          navigateIT={() => navigate(`/Menu/${el.id}`)}
          // checkName={props.checkName}
          // handleCart={props.handleCart}
        />;
      })}
    </div>
  );
}

export default Menu;
