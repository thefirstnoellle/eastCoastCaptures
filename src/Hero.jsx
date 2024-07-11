import React from 'react';
import heroImage from './assets/hero-image.jpg'

function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" />
    </div>
  );
}


export default Hero;