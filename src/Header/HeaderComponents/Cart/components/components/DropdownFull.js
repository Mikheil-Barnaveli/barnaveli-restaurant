import React from 'react'
import SingleCartProduct from './components/SingleCartProduct'
import CheckoutBtn from './components/CheckoutBtn'
import './DropdownFull.css'

function DropdownFull(props) {


console.log(props.data, "es aris dropdown full");
  return (
    <div id='dropdown-full-div'>

{props.data.map((el, key) =>{
  return <SingleCartProduct data={el} key={el.id} removeItem={props.removeItem}/>
})}
{/* <SingleCartProduct data={props.data} removeItem={props.removeItem}/> */}
    <CheckoutBtn/>
    </div>
  )
}

export default DropdownFull