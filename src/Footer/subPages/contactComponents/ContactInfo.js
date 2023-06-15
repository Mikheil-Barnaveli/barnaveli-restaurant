import React, { useState } from "react";
import "./ContactInfo.css";
import FB from "../../../assets/images/fb.png";
import FB2 from "../../../assets/images/fb2.png";
import Insta from "../../../assets/images/insta.png";
import Insta2 from "../../../assets/images/insta2.png";
import twt from "../../../assets/images/twt.png";
import twt2 from "../../../assets/images/twt2.png";

function ContactInfo() {
  const [fBLogo, setFBLogo] = useState(FB);
  const [instaLogo, setInstaLogo] = useState(Insta);
  const [tWTLogo, setTWTLogo] = useState(twt);

  function handleFBChange() {
    setFBLogo(FB2);
  }
  function handleFBChange2() {
    setFBLogo(FB);
  }
  function handleInstaChange() {
    setInstaLogo(Insta2);
  }
  function handleInstaChange2() {
    setInstaLogo(Insta);
  }
  function handleTwtChange() {
    setTWTLogo(twt2);
  }
  function handleTwtChange2() {
    setTWTLogo(twt);
  }

  return (
    <div id="contact-info-div">
      <h1 id="contact-info-h1">Contact Info</h1>
      <h2 className="contact-info-h2">
        Email: <span className="contact-info-span">randomEmail@gmail.com</span>
      </h2>
      <h2 className="contact-info-h2">
        Number: <span className="contact-info-span">123456789</span>
      </h2>
      <h2 className="contact-info-h2">
        Adress: <span className="contact-info-span">random adress</span>
      </h2>
      <h2 className="contact-info-h2">
        About Us:{" "}
        <span className="contact-info-span">
          Indulge in exquisite flavors and exceptional dining at{" "}
          <span id="name-span">"BARNAVELI"</span>. Our passionate chefs craft
          mouthwatering dishes using the finest ingredients. Experience warm
          hospitality, a welcoming atmosphere, and a fusion of international and
          local flavors. Join us for culinary excellence and unforgettable
          memories.
        </span>
      </h2>
      <div id="social-media-div">
        <div className="social-media-icon-div">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={fBLogo}
              onMouseOver={handleFBChange}
              onMouseLeave={handleFBChange2}
              className="social-media-icon"
            ></img>
          </a>
        </div>
        <div className="social-media-icon-div">
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src={instaLogo}
              onMouseOver={handleInstaChange}
              onMouseLeave={handleInstaChange2}
              className="social-media-icon"
            ></img>
          </a>
        </div>
        <div className="social-media-icon-div">
          <a href="https://twitter.com/" target="_blank">
            <img
              src={tWTLogo}
              onMouseOver={handleTwtChange}
              onMouseLeave={handleTwtChange2}
              className="social-media-icon"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
