import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel3.css';

const Panel3: React.FC = () => {
  return (
    <PanelTemplate title="Panel 3">
      <div className="panel3-content">
        <p>This is some additional content for Panel 3.</p>
        <button onClick={() => alert('Button in Panel 3 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel3;
