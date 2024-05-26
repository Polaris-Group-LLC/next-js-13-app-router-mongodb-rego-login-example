import React from 'react';
import './Panel3.css';
const Panel3 = () => {
  return (
    <div className="panel-wrapper">
      <div className="left-column">
        <button className="toggle-button">Toggle</button>
      </div>
      <div className="panel-content">
        <p>Content for Panel 3</p>
      </div>
    </div>
  );
};
export default Panel3;
