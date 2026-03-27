import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <h1>About Paradise Nursery</h1>
        <p className="tagline">Your Gateway to Nature's Beauty</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Paradise Nursery is dedicated to bringing the beauty and benefits of 
            houseplants into every home. We believe that plants enhance our living 
            spaces, improve air quality, and bring us closer to nature.
          </p>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To become the leading online destination for premium houseplants and 
            gardening supplies, making plant parenthood accessible to everyone.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We source only the healthiest plants</li>
            <li><strong>Sustainability:</strong> Eco-friendly practices in all operations</li>
            <li><strong>Customer Service:</strong> Your satisfaction is our priority</li>
            <li><strong>Education:</strong> Helping you become a successful plant parent</li>
          </ul>
        </section>

        <section className="team-section">
          <h2>Why Choose Paradise Nursery?</h2>
          <ul>
            <li>Carefully curated plant collection</li>
            <li>Expert advice from plant enthusiasts</li>
            <li>Competitive pricing</li>
            <li>Secure and easy checkout process</li>
            <li>Fast and reliable shipping</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
