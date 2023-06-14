import React from 'react'
import './Contact.css'
import ContactForm from './contactComponents/ContactForm'
import ContactInfo from './contactComponents/ContactInfo'
import ContactMap from './contactComponents/ContactMap'

function Contact() {
  return (
    <div id='contact-div'>
      <div id='div-for-form-and-info'>
      <ContactInfo/>
      
      <ContactForm/>
      </div>
      <div id='div-for-map'>
      <ContactMap/>
      </div>
    </div>
  )
}

export default Contact