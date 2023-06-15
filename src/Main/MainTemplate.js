import React from 'react'
import './MainTemplate.css'
import Slider from './Slider/Slider'
import AboutUs from './AboutUs/AboutUs'

function MainTemplate() {
  return (
    <>
    <div id='the-main-div'>
      <h1 id='the-main-div-h1'>
      Welcome to <span id='the-main-div-span'>BARNAVELI</span>, where flavors come alive and memories are made
      </h1>
        <div id='image-div'>
        <Slider/>
        </div>
    </div>
    <AboutUs/>
    </>
  )
}

export default MainTemplate