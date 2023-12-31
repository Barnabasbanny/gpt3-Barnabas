import React from 'react';
import './feature.css';

const Feature = ({ tittle, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-tittle">
        <div />
        <h1>{tittle}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
      </div>
  )
}

export default Feature