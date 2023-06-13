import React from 'react'
import SingleCartProduct from './components/SingleCartProduct'
import CheckoutBtn from './components/CheckoutBtn'
import './DropdownFull.css'

function DropdownFull(props) {


console.log(props.data, "es aris dropdown full");
  return (
    <div id='dropdown-full-div'>

{/* {props.data.map((el) =>{
  return <SingleCartProduct data={el} removeItem={props.removeItem}/>
})} */}
<SingleCartProduct data={{}} removeItem={props.removeItem}/>
    <CheckoutBtn/>
    </div>
  )
}

export default DropdownFull