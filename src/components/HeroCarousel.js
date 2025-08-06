import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';
import Mount2 from '../assets/Mount2.jpg'; // adjust path based on location
import Mount1 from '../assets/Mount1.jpg'; // adjust path based on location
import Mount3 from '../assets/Mount3.jpg'; // adjust path based on location


function HeroCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mount2} // Replace with your image path
          alt="Calm nature"
        />
        <Carousel.Caption>
          <h3>Welcome to MindBloom</h3>
          <p>Your journey to wellness starts here.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mount1} // Replace with your image path"
          alt="Meditation"
        />
        <Carousel.Caption>
          <h3>Breathe. Heal. Grow.</h3>
          <p>Take a moment to connect with yourself.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mount3} // Replace with your image path
          alt="Flowers"
        />
        <Carousel.Caption>
          <h3>Flourish in Every Season</h3>
          <p>MindBloom is here for you, every day.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
