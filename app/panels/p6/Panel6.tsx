import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel6.css';

const Panel6: React.FC = () => {
  return (
    <PanelTemplate title="Panel 6">
      <div className="panel6-content">
        <p>This is some additional content for Panel 6.</p>
        <button onClick={() => alert('Button in Panel 6 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel6;
