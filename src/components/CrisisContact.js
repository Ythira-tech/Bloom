import React from 'react';
import './CrisisContact.css';

function CrisisContact() {
  return (
    <div className="crisis-contact-section">
      <h3 className="crisis-heading">In Crisis or Need to Talk?</h3>
      <p className="crisis-text">You're not alone. Here’s where you can reach out for immediate help:</p>
      <ul className="crisis-list">
        <li>
          📞 <strong>Befrienders Kenya:</strong> 0722 178177
        </li>
        <li>
          📱 <strong>Red Cross Mental Health Support:</strong> 1199 (Free helpline)
        </li>
        <li>
          🌐 <strong>AMHF Kenya:</strong> <a href="https://mentalhealth.or.ke" target="_blank" rel="noreferrer">mentalhealth.or.ke</a>
        </li>
        <li>
          🆘 <strong>Emergency Services:</strong> Dial 999 / 112 in Kenya
        </li>
      </ul>
      <p className="crisis-reminder">Please reach out — you matter, and there is help available.</p>
    </div>
  );
}

export default CrisisContact;
