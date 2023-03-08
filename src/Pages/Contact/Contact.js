import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {FiSend} from "react-icons/fi";

const Contact = () => {
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [message, setmessage] = useState("");

  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

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
          if(result.text === "OK") {

            alert("Thank you for getting in touch!")
setname("");
setemail("")
setmessage("");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_container">
    <form style={{marginTop: "50px"}} ref={form} onSubmit={(e) => {
      e.preventDefault();
 if(name === "") {
  alert("Please Enter Your Name");
} else if(email === "") {
  alert("Please Enter Your Email");
} else if(message === "") {
  alert("Please Enter Some Text In Message Box")
} else {
  sendEmail()
}

    }}
    >
      <div className="row">
        <div className="col-25">
      <label className="label1">Name</label>
      </div>
      <div className="col-75">
      <input className="input_box" type="text" name="from_name" placeholder="Enter Name" 
      
      value={name}
      onChange={(val) => {
        console.log("first",name)
        setname(val.target.value)
      }}
      />
      </div>
      </div>
      
      <div className="row">
        <div className="col-25">
        <label  className="label1">Email</label>
        </div> 

        <div className="col-75">
        <input className="input_box" type="email" name="user_email" placeholder="Enter Email" 
            value={email}
            onChange={(val) => {
              console.log("second",email)
              setemail(val.target.value)
            }}
        />
        </div>
      </div>
      
      <div className="row">
        <div className="col-25">
        <label  className="label1">Message</label>
        </div> 

        <div className="col-75">
        <textarea style={{height:"200px"}} className="input_box" name="message" placeholder="Enter Message"
            value={message}
            onChange={(val) => {
              console.log("thired",message)
              setmessage(val.target.value)
            }}
        />
        </div>
      </div>
   
   <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
    <button className="submit-btn" type="submit">Send<span><FiSend/></span></button>
   {/* <input style={{   background:  "aqua",borderRadius:"6px",padding:"12px"}} type="submit" value="Send" /><span><FiSend/></span> */}

   </div>
    </form>
    </div>
  );
};
export default Contact;
