import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="container-contact">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <br />
            <input type="checkbox" />{" "}
            <span>
              {" "}
              I agree to the terms and conditions laid out in the Privacy Policy
              *
            </span>
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
