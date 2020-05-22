import React from "react";
import thumbnail1 from "../Media/thumbnail1.png";
import thumbnail2 from "../Media/thumbnail2.png";
import thumbnail3 from "../Media/thumbnail3.png";
import thumbnail4 from "../Media/thumbnail4.png";

const Services = () => {
  return (
    <div className="content-position2">
      <h1 className="text2 heading-size">Services</h1>
      <div className="underline"/>
      <div className="text-orientation card">
        <img className="card-image" src={thumbnail4} alt="oh no!" />
        <div className="text-spacing">
          <h2>PERSONAL TRAINING ONE TO ONE</h2>
          <p>
            One-on-one training will be focused on educating you about your body
            with a programme tailored to your specific fitness goals.
          </p>
          <p>
            Pay as you go 1 hour training session £55, block booking of 10
            sessions £500
          </p>
        </div>
      </div>
      <div className="text-orientation card">
        <img className="card-image" src={thumbnail3} alt="oh no!" />
        <div className="text-spacing">
          <h2>PERSONAL TRAINING ONE TO TWO</h2>
          <p>
            For those who have friends with similar goals and body types - share
            the cost and save some money
          </p>
          <p>
            Paired 1 hour training session £35 each, block booking of 10
            sessions £600
          </p>
        </div>
      </div>
      <div className="text-orientation card">
        <img className="card-image" src={thumbnail2} alt="oh no!" />
        <div className="text-spacing">
          <h2>GROUP TRAINING</h2>
          <p>Small group training is a workout for mixed ability groups.</p>
          <p>
            £10 - £15 depending on numbers, location and equipment for a 1 hour
            session.
          </p>
        </div>
      </div>
      <div className="text-orientation card">
        <img className="card-image" src={thumbnail1} alt="oh no!" />
        <div className="text-spacing">
          <h2>SPORTS MASSAGE THERAPY</h2>
          <p>
            Massage Therapy is manual manipulation of soft body tissues (muscle,
            connective tissue, tendons and ligaments) to enhance a person's
            health and well-being - to reduce stress and anxiety, relax muscles,
            rehabilitate injuries and reduce pain.
          </p>
          <p>£30 - 30 minutes treatment, £50 - 1 hour treatment</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
