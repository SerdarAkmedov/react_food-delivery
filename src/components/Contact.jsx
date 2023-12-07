import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact" style={{paddingTop:"100px"}}>
      <h1 className="primary-heading">Do you have a question?</h1>
      <h1 className="primary-heading">We can help you!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmailgmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
