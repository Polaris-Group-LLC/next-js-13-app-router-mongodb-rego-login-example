import React, { ReactNode } from 'react';
import './panel.css'; // Import the CSS file

interface PanelTemplateProps {
  title: string;
  children: ReactNode;
}

const PanelTemplate: React.FC<PanelTemplateProps> = ({ title, children }) => {
  return (
    <div className="panel-container"> {/* Apply the CSS class */}
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PanelTemplate;