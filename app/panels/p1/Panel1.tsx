import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel1.css';

const Panel1: React.FC = () => {
  return (
    <PanelTemplate title="Panel 1">
      <div className="panel1-content">
        <p>This is some additional content for Panel 1.</p>
        <button onClick={() => alert('Button in Panel 1 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel1;
