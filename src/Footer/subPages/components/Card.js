import React from 'react'
import './CardTemplate.css'

function Card(props) {

  console.log(props.price, "es aris price");
  return (
    <>
    <div id='card-div' onClick={props.navigateIT} style={{backgroundColor:props.BGcolor}}>
    <div id='image-div' onClick={props.checkname} >
      <img src={props.image} style={{width:'100%', height:'100%'}}></img>
    </div>
    <div id='info-div'>
        <h1 id='menu-item-name' style={{color:props.infoColor}}>{props.name}</h1>
        <div id='detail-info'>
            <h2 className='detail-info' style={{color:props.infoColor}}>Category: <span className='props-span' style={{color:props.infoColor}}>{props.category}</span></h2>
            <h2 className='detail-info' style={{color:props.infoColor}}>Price: <span className='props-span' style={{color:props.infoColor}}>{props.price}$</span></h2>
            
        </div>
    </div>
    </div>
    </>
  )
}

export default Card