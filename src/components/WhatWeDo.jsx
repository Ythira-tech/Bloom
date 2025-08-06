import React from 'react';
import './WhatWeDo.css';

const services = [
  {
    title: 'WEEKLY EMOTIONAL WELLNESS CHECK-INS',
    description:
      'Join our weekly online sessions designed for Gen Z, where we explore emotions, stress triggers, and real-life coping tools. Each session empowers you to manage school, work, and social life with confidence and emotional awareness.',
  },
  {
    title: 'CREATIVE EXPRESSION WORKSHOPS',
    description:
      'Participate in engaging workshops using journaling, digital art, and music to process mental health challenges. Express yourself in a safe space and learn healthy emotional release techniques.',
  },
  {
    title: 'YOUTH-LED SUPPORT CONVERSATIONS',
    description:
      'Connect with peers in moderated conversations about anxiety, loneliness, and identity. These honest talks build connection, break stigma, and strengthen emotional resilience.',
  },
  {
    title: 'PERSONALIZED MENTAL HEALTH GUIDANCE',
    description:
      'Talk to our wellness mentors to set up personalized well-being goals and mental fitness plans. Whether you are battling burnout or social anxiety, we offer steps tailored to your journey.',
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2>What We Do at MindBloom</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
