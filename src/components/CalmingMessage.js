import React from 'react';
import './CalmingMessage.css'; // Make sure this file exists
import calmingImg from '../assets/Change.jpg'; // Update path to your image if needed

function CalmingMessage() {
  return (
    <section className="calming-section">
      <div className="calming-container">
        <div className="calming-image">
          <img src={calmingImg} alt="Calming landscape" />
        </div>
        <div className="calming-text">
          <h2>Find Your Calm</h2>
          <p>
            At MindBloom, we believe that healing begins with small moments of peace.
            Take a breath, pause, and allow yourself to feel. You're not alone in this
            journey — we are here to walk with you as you rediscover your inner strength,
            one step at a time.
          </p>
          <button className="calm-button">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
}

export default CalmingMessage;
