import React from 'react'
import './SingleCartProduct.css'
import DropdownImg from './SingleCartProduct/DropdownImg'
import DropdownText from './SingleCartProduct/DropdownText'
import DropdownDelete from './SingleCartProduct/DropdownDelete'

function SingleCartProduct(props) {
  return (
    <li id='single-cart-product'>
        <DropdownImg {...props}/>
        <DropdownText {...props}/>
        <DropdownDelete {...props}/>
    </li>
  )
}

export default SingleCartProduct