import React, { useState } from "react";
import "./DropdownDelete.css";
import deleteIcon from "../../../../../../../assets/images/delete.png";
import deleteIcon2 from "../../../../../../../assets/images/delete1.png";

function DropdownDelete(props) {
  const [removeIcon, setRemoveIcon] = useState(deleteIcon);

  function deleteImage() {
    setRemoveIcon(deleteIcon2);
  }
  function deleteImage2() {
    setRemoveIcon(deleteIcon);
  }


  // function deleteCartItem() {
  //   let reduceVar = props.cartData;
  //   reduceVar.reduce((sum, obj) => sum + obj.total, 0);
  //   reduceVar.filter((item) => item.id !== props.data.id);
  //   let sum = reduceVar.reduce((sum, obj) => sum + obj.total, 0);
  //   console.log(reduceVar, "deletedan");
  //   props.setTotalSum(sum)
  //   props.calculateSum()
  // }

  return (
    <div id="delete-btn-div">
      <button
        onClick={() => {
          
          props.removeItem(props.data.id);
          deleteCartItem();
          props.calculateSum();
        }}
        onChange={deleteCartItem}
        id="dropdown-delete-btn"
      >
        <img
          src={removeIcon}
          onMouseOver={deleteImage}
          onMouseLeave={deleteImage2}
          id="delete-img"
        ></img>
      </button>
    </div>
  );
}

export default DropdownDelete;
