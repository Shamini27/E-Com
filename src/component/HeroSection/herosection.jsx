import React from 'react';
import Heroimage from '../../assets/img/jpg/hsectionimage.jpg';
import './herosection.css';

const HeroSection = () => {
  return (
    <div className="hsection">
      <div className="hsection_box">
        <div className="hsection_box_left">
          <h1>Elevate your shopping experience, indulge in luxury</h1>
          <p>
            Welcome to eShop Hub!!! <br />Your ultimate destination for all your shopping needs. Explore a vast selection of high-quality products, from fashion and accessories to home decor and electronics.
          </p>
          <a href="/shop" className="shop-button">Shop Now</a>
        </div>
        <div className="hsection_box_right">
          <img src={Heroimage} alt="Hero section" width={700} height={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
