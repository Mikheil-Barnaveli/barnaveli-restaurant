import React from 'react'
import './DropdownImg.css'

function DropdownImg(props) {
  return (
    <img src={props.data.src} alt='product' id='dropdown-product-image'></img>
  )
}

export default DropdownImg