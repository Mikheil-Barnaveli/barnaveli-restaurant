import React from 'react'
import './MenuItemPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import bgImage from '../assets/images/background-img.jpg'

function MenuItemPage(props) {

const params = useParams();
  let navigate = useNavigate();

  console.log(params, "es aris paramsi");

  console.log(props.data, "es aris propsi");

  const element = props.data.find((el) => {
    return el.id === Number(params.menuItem);
  });

  console.log(element, "es aris elementis");

    
  return (
    <div id='menu-item-page-div' >

        

        <div id='menu-item-page-image-div'>
          <img src={element.image} id='menu-item-page-image'></img>
        </div>
        <div id='menu-item-page-info-div'>
          <h2>{element.name}</h2>
          <h2>Price: <span className='menu-item-page-info-span'>{element.price}</span></h2>
          <h2>Description: <span className='menu-item-page-info-span'>{element.description}</span></h2>
        </div>

    </div>
  )
}

export default MenuItemPage