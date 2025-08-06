import React from 'react';
import './MoodCategories.css';

const moods = [
  { name: 'Happy', icon: '😊' },
  { name: 'Sad', icon: '😢' },
  { name: 'Anxious', icon: '😰' },
  { name: 'Relaxed', icon: '😌' },
  { name: 'Tired', icon: '😴' },
  { name: 'Motivated', icon: '💪' },
  { name: 'Loved', icon: '❤️' },
];

function MoodCategories() {
  return (
    <div className="mood-section">
      <h2 className="mood-heading">How are you feeling today?</h2>
    <div className="mood-container">
      {moods.map((mood, index) => (
        <div className="mood-bubble" key={index}>
          <span className="icon">{mood.icon}</span>
          <p>{mood.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default MoodCategories;
