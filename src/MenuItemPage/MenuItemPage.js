import React from 'react'
import './MenuItemPage.css'
import { useNavigate, useParams } from 'react-router-dom'

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
    <div id='menu-item-page-div'>

        <h1>{element.name}</h1>
    </div>
  )
}

export default MenuItemPage