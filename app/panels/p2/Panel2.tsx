import React from 'react';
import './Panel2.css';
const Panel2 = () => {
  return (
    <div className="panel-wrapper">
      <div className="left-column">
        <button className="toggle-button">Toggle</button>
      </div>
      <div className="panel-content">
        <p>Content for Panel 2</p>
      </div>
    </div>
  );
};
export default Panel2;
