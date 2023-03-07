import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {FiSend} from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d90iid",
        "template_be6xmy9",
        form.current,
        "VMdu71auH8w4rRCj3",
        {
          from_name: "from_name",
          user_email: "user_email",
          message: "message",
        }
      )
      .then(
        (result) => {
          alert("Thank you for getting in touch!")
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_container">
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-25">
      <label className="label1">Name</label>
      </div>
      <div className="col-75">
      <input className="input_box" type="text" name="from_name" placeholder="Enter Name" />
      </div>
      </div>
      
      <div className="row">
        <div className="col-25">
        <label  className="label1">Email</label>
        </div> 

        <div className="col-75">
        <input className="input_box" type="email" name="user_email" placeholder="Enter Email" />
        </div>
      </div>
      
      <div className="row">
        <div className="col-25">
        <label  className="label1">Message</label>
        </div> 

        <div className="col-75">
        <textarea style={{height:"200px"}} className="input_box" name="message" placeholder="Enter Message"/>
        </div>
      </div>
   
   <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
   <input style={{   background:  "aqua",borderRadius:"6px",padding:"12px"}} type="submit" value="Send" /><span><FiSend/></span>

   </div>
    </form>
    </div>
  );
};
export default Contact;
