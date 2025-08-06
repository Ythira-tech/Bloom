import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './QuestionsSection.css';
import growingHands from '../assets/Growing hands.jpeg'; // ✅ make sure path is correct

function QuestionsSection() {
  return (
    <section className="faq-section">
      <Container>
        <div className="faq-container">
          {/* Left: Illustration */}
          <div className="faq-image">
            <img src={growingHands} alt="Illustration of growth" />
          </div>

          {/* Right: FAQ Accordion */}
          <div className="faq-questions">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is MindBloom?</Accordion.Header>
                <Accordion.Body>
                  MindBloom is a space designed to support your emotional wellness with tools like mood tracking, affirmations, and calming visuals.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Is my mood data saved?</Accordion.Header>
                <Accordion.Body>
                  Right now, MindBloom does not store your mood entries. All activities are just for personal reflection.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I use MindBloom on my phone?</Accordion.Header>
                <Accordion.Body>
                  Yes! MindBloom is responsive and works smoothly on all devices, including mobile phones and tablets.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Do I need an account to use MindBloom?</Accordion.Header>
                <Accordion.Body>
                  No account or login is required. MindBloom is free to explore at your own pace.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I customize my mood entries?</Accordion.Header>
                <Accordion.Body>
                  In future versions, yes! We're planning to allow custom moods and journal entries to help express yourself better.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>What type of content can I expect here?</Accordion.Header>
                <Accordion.Body>
                  Calming visuals, daily affirmations, emotional wellness tools, and reflections to help you check in with yourself gently.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>How often should I use MindBloom?</Accordion.Header>
                <Accordion.Body>
                  As often as you like — whether it’s once a day, once a week, or just when you need a moment of calm.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuestionsSection;
