import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel2.css';

const Panel2: React.FC = () => {
  return (
    <PanelTemplate title="Panel 2">
      <div className="panel2-content">
        <p>This is some additional content for Panel 2.</p>
        <button onClick={() => alert('Button in Panel 2 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel2;
