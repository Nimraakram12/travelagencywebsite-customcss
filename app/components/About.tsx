import React from "react";
import "../style/About.css";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/ABOUT.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At <strong>TRAVEL IN</strong>, we believe that every journey is a unique story waiting to be told. 
            With years of experience in the travel industry, we specialize in curating personalized travel experiences 
            that leave lasting memories.
          </p>
          <p>
            From breathtaking beach escapes to adventurous safaris and cultural explorations, 
            our dedicated team ensures every detail of your trip is seamless. We partner with 
            top-notch hotels, airlines, and tour operators to provide you with the best.
          </p>
          <p>
            Let us take you on an adventure of a lifetime. Your dream destination is just a click away!
          </p>
          <a href="#contact" className="about-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
