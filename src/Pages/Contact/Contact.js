import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <div style={{background:"black",height:"80vh",textAlign:"center",display:"flex",justifyContent:"center"}}>

<div style={{background:"#251f1f",color:"white",width:"600px",height:"auto",margin:"50px",padding:"35px",borderRadius:"12px"}}>
    <div style={{background:"red",margin:"10px"}}>   
    <h3>Get in touch...</h3>
    <p>Interested to collaborate?</p>
    <p>Feel Free to drop me an email</p>
    </div>

    <div style={{background:"green"}} >
        <form>
            <input
            // className='input-box '
            style={{margin:"10px",width:"auto",borderRadius:"8px"}}
            type="email"
            placeholder='Your Email ID'
            />
            <br/>

            <textarea
            // className='input-box1 '
            style={{    margin: "10px",
              width: "auto",
              borderRadius: "8px"}}
            type="text"
            placeholder='Your Message'
            />
<br/>
            <button
            // className='submit-btn'
            >Send Email</button>
        </form>
  
    </div>

    </div>
    </div>
    </>
  )
}

export default Contact