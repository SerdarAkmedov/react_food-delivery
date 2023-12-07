import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
const Testimonails = () => {
  return (
    <div className="work-section-wrapper" id="testimonials" style={{paddingTop:"100px"}}>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What they are saying?</h1>
        <p className="primary-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          minus adipisci, inventore voluptatem harum numquam tempora natus
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        sunt officiis velit, sint hic culpa.
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <h2>Lorem ipsum</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
