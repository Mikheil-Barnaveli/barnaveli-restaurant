import React from "react";
import "./Menu.css";
import Card from "./components/Card";
import { useNavigate, useParams } from "react-router-dom";

function Menu(props) {
  const params = useParams();
  let navigate = useNavigate();

  // const element = props.menuData.find((el) => {
  //   return el.id === Number(params.menuItem);
  // });


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
          item={el}
          menuData={props.menuData}
          cartData={props.cartData}
          setCartData={props.setCartData}
          id={el.id}
        />;
      })}
    </div>
  );
}

export default Menu;
