import React, { useEffect, useState } from 'react'
import './CheckoutBtn.css'

function CheckoutBtn(props) {

  const [finalSum, setFinalSum] = useState(0)
  useEffect(() => {
    setFinalSum(props.totalSum)
  }, [props.totalSum])
  

  return (
    <div id='checkout-div'>
      <h1 id='checkout-total-h1'><span id='checkout-total-span'>Total: </span>{finalSum}$</h1>
    <button id='chechkout-btn'>Checkout</button>
    </div>
  )
}

export default CheckoutBtn