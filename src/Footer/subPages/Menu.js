import React from "react";
import "./Menu.css";
import Card from "./components/Card";

function Menu(props) {

  console.log(props.menuData);

  return (
    <div id="menu-div">
      {props.menuData.map((el) => {
       return <Card
          image={el.image}
          name={el.name}
          category={el.category}
          price={el.price}
          infoColor={{}}
          BGcolor={{}}
          navigateIT={{}}
          checkname={{}}
        />;
      })}
    </div>
  );
}

export default Menu;
