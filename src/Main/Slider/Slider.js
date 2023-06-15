import React, { useEffect, useState } from 'react'
import image1 from '../../assets/images/slide1.jpg'
import image2 from '../../assets/images/slide2.jpg'
import image3 from '../../assets/images/slide3.jpg'
import './Slider.css'

function Slider() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderImages] = useState([
      image1,
      image2,
      image3
    ]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
      }, 7000);
      return () => clearInterval(interval);
    }, [sliderImages.length]);
  
    const goToSlide = (slideIndex) => {
      setCurrentSlide(slideIndex);
    };
  
    return (
      <div id="slider">
        <img src={sliderImages[currentSlide]} alt="Slider Image" id='slider-image'/>
  
        <div className="slider-buttons-div">
          {sliderImages.map((_, index) => (
            <button
            className='slider-btn'
              key={index}
              id={currentSlide === index ? "active" : ""}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

export default Slider