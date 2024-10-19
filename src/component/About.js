import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Your Car Rental Company</strong>, your premier destination for car rentals. 
        We offer a wide range of vehicles to suit all your needs, whether it's a business trip, a family vacation, 
        or just a weekend getaway. Our mission is to provide reliable, affordable, and convenient car rental services.
      </p>
      <h2>Our Mission</h2>
      <p>
        At Your Car Rental Company, our mission is to ensure that our customers have a seamless and enjoyable 
        rental experience. We prioritize customer satisfaction, safety, and sustainability in every aspect of our business. 
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide Selection of Vehicles</li>
        <li>Competitive Pricing</li>
        <li>Excellent Customer Service</li>
        <li>Easy Online Booking</li>
        <li>Flexible Rental Options</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have questions? Feel free to <a href="/contact">contact us</a> for more information or assistance.
      </p>
    </div>
  );
};

export default About;