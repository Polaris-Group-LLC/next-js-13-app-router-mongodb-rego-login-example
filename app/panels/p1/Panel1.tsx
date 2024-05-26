import React from 'react';
import './Panel1.css';
import DatabaseMenu from '@/components/data/DatabaseMenu';
const Panel1 = () => {
  return (
    <div className="panel-wrapper">
      <div className="left-column">
        <button className="toggle-button">Toggle</button>
      </div>
      <div className="panel-content">
        <p>Content for Panel 1</p>
      </div>
    </div>
  );
};
export default Panel1;
