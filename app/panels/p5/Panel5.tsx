import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel5.css';

const Panel5: React.FC = () => {
  return (
    <PanelTemplate title="Panel 5">
      <div className="panel5-content">
        <p>This is some additional content for Panel 5.</p>
        <button onClick={() => alert('Button in Panel 5 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel5;
