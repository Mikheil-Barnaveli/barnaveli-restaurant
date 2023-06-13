import React from "react";
import "./Dropdown.css";
import DropdownEmpty from "./components/DropdownEmpty";
import DropdownFull from "./components/DropdownFull";

function Dropdown(props) {

  return (
    <div id="the-main-dropdown">
      <div id="dropdown-headline">
        <h1 id="dowpdown-headline-cart">Cart</h1>
      </div>
      <hr id="dropdown-horizontal-rule"></hr>
      <div id="dropdown-list">
        {props.data.length == 0 ? <DropdownEmpty/> : <DropdownFull data={props.data} removeItem={props.removeItem}/>}
      </div>
    </div>
  );
}

export default Dropdown;
