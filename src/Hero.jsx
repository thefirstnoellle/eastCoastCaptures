import React from 'react';
import heroImage from './assets/hero-image.jpg'

function Hero() {
  return (
    <hero>
      <img src={heroImage} alt="Hero" />
      <div>
        <h1 className="hero-text">EAST COAST CAPTURES.</h1>
      </div>
    </hero>
  );
}


export default Hero;