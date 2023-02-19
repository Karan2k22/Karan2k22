import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <div className='contact'>

<div className='contact-head'>
    <div>   
    <h3>Get in touch...</h3>
    <p>Interested to collaborate?</p>
    <p>Feel Free to drop me an email</p>
    </div>

    <div className="contact-form">
        <form>
            <input
            className='input-box '
            type="email"
            placeholder='Your Email ID'
            />

            <textarea
            className='input-box1 '
            type="text"
            placeholder='Your Message'
            />

            <button
            className='submit-btn'>Send Email</button>
        </form>
  
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact