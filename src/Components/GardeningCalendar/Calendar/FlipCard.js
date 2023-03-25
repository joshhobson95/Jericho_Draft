import React, { useState } from 'react';
import './FlipCard.css';

function FlipCard({ id, name }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card${isFlipped ? ' flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{name}</p>
        </div>
        <div className="flip-card-back">
          <p> {name}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
