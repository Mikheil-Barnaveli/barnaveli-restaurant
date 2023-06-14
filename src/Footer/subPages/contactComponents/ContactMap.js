import React from 'react'
import './ContactMap.css'

function ContactMap() {
  return (
    <div id='contact-map-div'>
        <h1 id='contact-map-h1'>Map Location</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.2012740579466!2d44.797391275973254!3d41.69459047126256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cef10e3ea25%3A0x3a7d628eef1bce62!2z4YOS4YOQ4YOa4YOU4YOg4YOY4YOQIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1686732210771!5m2!1ska!2sge"  id='conact-map' referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
    </div>
  )
}

export default ContactMap