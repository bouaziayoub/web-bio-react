import React, { useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);
  const checkboxInput = useRef(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [buttonText, setButtonText] = useState("Show Form"); // State to change button text [Show Form/Hide Form

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validarForm = () => {
    let isValid = true;

    if (nameInput.current.value === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (emailInput.current.value === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
      if (!regexEmail.test(emailInput.current.value)) {
        setEmailError("Email is not valid");
        isValid = false;
      } else {
        setEmailError("");
      }
    }

    if (messageInput.current.value === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!checkboxInput.current.checked) {
      setCheckboxError("You must agree to the terms and conditions");
      isValid = false;
    } else {
      setCheckboxError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarForm()) {
      alert("Form submitted");
    }
  };

  const handleButtonClick = () => {
    // showForm ? setShowForm(false) : setShowForm(true);
    if (showForm) {
      setShowForm(false);
      setButtonText("Show Form");
    } else {
      setShowForm(true);
      setButtonText("Hide Form");
    }
  };

  return (
    <>
      <div className="contact-head">
        <div className="how-we-can-help">
          <h2>How we can help you?</h2>
          <p>
            We are here to help you with any questions you may have. Please
            reach out to us and we will respond as soon as possible.
          </p>
        </div>

        <div className="contact-info-time">
          <div className="info">
            <h2>Contact Information</h2>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>{" "}
              1234 Main St, City, Country
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>{" "}
              +123 456 789
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <a href="mailto:web.bio@gmail.com"> bio@gmail.com</a>
            </p>
            <div className="social-media">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
                fb
              </a>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter"></i>
                tw
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
                ig
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin"></i>
                in
              </a>
            </div>
          </div>
          <div className="timing">
            <h2>Opening Hours</h2>
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
            </p>
            <p>
              <strong>Saturday:</strong> 10:00 AM - 4:00 PM
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>

      {/* FORMULARIO */}

      <div className="main-contact">
        <div className="container-form">
          <div className="form-head">
            <h3>For any questions, you can contact us using our form</h3>
            <button onClick={handleButtonClick}>{buttonText}</button>
          </div>
          {showForm && (
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" ref={nameInput} />
                <span>{nameError}</span>
                <br />
                <input type="text" placeholder="Email" ref={emailInput} />
                <span>{emailError}</span>
                <br />
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  ref={messageInput}
                ></textarea>
                <span>{messageError}</span>
                <br />
                <label>
                  <input type="checkbox" ref={checkboxInput} /> I agree to the
                  terms and conditions laid out in the Privacy Policy
                </label>
                <span>{checkboxError}</span>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>

        <div className="location-map">
          <h2>Location</h2>
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.7057232933887!2d2.16988635!3d41.3868702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3d8a9f2c1%3A0xeea923befe921c3e!2sPlaza%20de%20Catalu%C3%B1a%2C%20Eixample%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1715628673221!5m2!1ses!2ses"
            width="400"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
