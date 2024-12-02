import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Moonlit</h1>
        <p>A platform for creators to showcase their talent!</p>
     
       
        <a href="/login" className="btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
