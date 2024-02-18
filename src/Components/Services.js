import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="container">
      <h2>OUR SERVICES</h2>
      <h4>Discover What We Offer For You</h4>
      <p>We know more than you do,we are better connected,we have access to benefits you can't get yourself, and we can match and often beat any prices you find.</p>
        <div className="service_box">
      <div className="items">
        <h4>Price Guarantee</h4>
        <p>Our company provides you the best rate so that you can be sure of booking</p>
      </div>
      <div className="items">
        <h4>Easy Booking</h4>
        <p>Very convenient for the clients to book from anywhere of the place in the world.</p>
      </div>
      <div className="items">
        <h4>24/7 Customer Care</h4>
        <p>Any query or issue that you may possibly have while booking our website is taken care here.</p>
      </div>
      <div className="items">
        <h4>TRAVEL GUIDES</h4>
        <p>Provide travel guides, tips, and recommendations for various destinations.</p>
      </div>
    </div>
    </div>
    
  );
}

export default Services;