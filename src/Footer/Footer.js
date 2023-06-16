import React, { useState } from 'react'
import './Footer.css'
import FB from "../assets/images/fb.png";
import FB2 from "../assets/images/fb2.png";
import Insta from "../assets/images/insta.png";
import Insta2 from "../assets/images/insta2.png";
import twt from "../assets/images/twt.png";
import twt2 from "../assets/images/twt2.png";

function Footer() {

  const [fBLogo, setFBLogo] = useState(FB2);
  const [instaLogo, setInstaLogo] = useState(Insta2);
  const [tWTLogo, setTWTLogo] = useState(twt2);


  return (
    <footer id='the-footer'>

      <h1>© 2023 BARNAVELI. All rights reserved.</h1>
      {/* <div id="footer-social-media-div">
        <div className="footer-footer-social-media-icon-div">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={fBLogo}
              className="footer-social-media-icon"
            ></img>
          </a>
        </div>
        <div className="footer-footer-social-media-icon-div">
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src={instaLogo}
              className="footer-social-media-icon"
            ></img>
          </a>
        </div>
        <div className="footer-footer-social-media-icon-div">
          <a href="https://twitter.com/" target="_blank">
            <img
              src={tWTLogo}
              className="footer-social-media-icon"
            ></img>
          </a>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer