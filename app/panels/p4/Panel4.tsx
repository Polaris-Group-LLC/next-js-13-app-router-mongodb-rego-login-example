import React from 'react';
import PanelTemplate from '../PanelTemplate';
import './Panel4.css';

const Panel4: React.FC = () => {
  return (
    <PanelTemplate title="Panel 4">
      <div className="panel4-content">
        <p>This is some additional content for Panel 4.</p>
        <button onClick={() => alert('Button in Panel 4 clicked!')}>Click Me</button>
      </div>
    </PanelTemplate>
  );
};

export default Panel4;
