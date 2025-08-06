import React from 'react';
import './InfoSection.css';

function InfoSection() {
  return (
    <>
<section className="info-section">
  <div className="info-box">
    <h2>Knowing when extra help is needed</h2>
    <p>
      You don't need to be an expert to recognize when someone needs outside help – 
      if you can tell a friend isn’t doing well, they might need a greater network of support.
    </p>
    <a href="#" className="info-link">
      <span className="circle">&rarr;</span> Learn the signs
    </a>
  </div>

  <div className="info-box">
    <h2>What to say when you don’t know what to say</h2>
    <p>
      Don’t worry if you’re at a loss for words! Here are conversation guides for those moments to help you get started.
    </p>
    <a href="#" className="info-link">
      <span className="circle">&rarr;</span> Conversation starters
    </a>
  </div>
</section>
</>
  );
}

export default InfoSection;
