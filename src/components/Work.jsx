import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,",
    },
    {
      image: ChooseMeals,
      title: "Choose how Often",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,",
    },
    {
      image: DeliveryMeals,
      title: "Fast Dlivery",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,",
    },
  ];
  return (
    <div
      className="work-section-wrapper"
      id="work"
      style={{ paddingTop: "70px" }}
    >
      <div className="work-section-top">
        <p className="primary-subheading">Works</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          perspiciatis optio corporis id quas illum beatae distinctio aliquid
          eaque dicta.
        </p>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div key={data.title} className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
