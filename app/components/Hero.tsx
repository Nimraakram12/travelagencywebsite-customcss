import React from "react";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>
          Plan your dream vacation with us. Explore breathtaking destinations
          and unforgettable experiences.
        </p>
        <a href="#destinations" className="hero-btn">
          Explore Destinations
        </a>
      </div>
    </section>
  );
};

export default Hero;
