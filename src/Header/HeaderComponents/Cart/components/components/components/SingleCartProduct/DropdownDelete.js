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


  return (
    <div id="delete-btn-div">
      <button
        onClick={() => {
          props.removeItem(props.data.id);
          props.calculateSum();
        }}
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
