import React from 'react';

import hero from '../images/hero.jpg';

function HeroSection() {
  return (
    <div className="hero-container" height="100%" width="100%">
      <img src={hero} alt="heroimg" width="100%" height="100%" />
    </div>
  );
}
export default HeroSection;
