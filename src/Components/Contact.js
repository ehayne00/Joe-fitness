import React from "react";
import phone from "../Media/quote.svg"

const Contact = () => {
  return (
    <div className="content-position2">
      <div className="flex flex-position">
        <h1 className="text2 heading-size">Let's Talk</h1>
        <img className="phone" src={phone} alt="oh no!" />
      </div>
      <div className="underline"/>​<h1>Joe Grant Fitness​</h1>
      <h2>Email: <a className="nav-link" href="mailto:joe@joegrant.training">joe@joegrant.training</a></h2>
      <h2>Tel: 07739984670</h2>
      <h2>Or log in to provisionally book online...</h2>
    </div>
  );
};

export default Contact;
