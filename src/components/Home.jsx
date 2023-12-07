import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container" style={{paddingTop:"100px"}} id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Ваша любимая еда доставляется горячей и свежей</h1>
          <p className="primary-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ratione rem, magni eaque nostrum commodi.</p>
          <button className="secondary-button">Order Now <FiArrowRight/></button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="banner" width={650} />
        </div>
      </div>
    </div>
  );
};

export default Home;
