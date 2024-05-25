import React, { useRef, useState, useEffect } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { FaTimes, FaAngleRight } from 'react-icons/fa';
import './kg2.css';

const ResizablePanels = () => {
  const panelRefs = Array.from({ length: 6 }, () => useRef(null));
  const [collapsed, setCollapsed] = useState(Array(6).fill(false));
  const [sizes, setSizes] = useState(Array(6).fill(15));

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const initialSizes = Array.from({ length: 6 }, (_, i) => {
      const size = rootStyles.getPropertyValue(`--panel-${i + 1}-width`);
      return size ? parseInt(size) : 15;
    });
    const initialCollapsed = Array.from({ length: 6 }, (_, i) => {
      const collapsed = rootStyles.getPropertyValue(`--panel-${i + 1}-collapsed`);
      return collapsed === 'true';
    });
    setSizes(initialSizes);
    setCollapsed(initialCollapsed);
  }, []);

  const togglePanel = (index: number) => {
    const panel = panelRefs[index].current;
    if (panel.isCollapsed()) {
      panel.expand();
      setCollapsed(prev => {
        const newCollapsed = [...prev];
        newCollapsed[index] = false;
        return newCollapsed;
      });
    } else {
      panel.collapse();
      setCollapsed(prev => {
        const newCollapsed = [...prev];
        newCollapsed[index] = true;
        return newCollapsed;
      });
    }
  };

  return (
    <PanelGroup autoSaveId="example" direction="horizontal" className="panel-group">
      {panelRefs.map((ref, index) => (
        <React.Fragment key={index}>
          <div className="left-column">
            <button onClick={() => togglePanel(index)} className="toggle-button">
              <FaAngleRight />
            </button>
          </div>
          <Panel ref={ref} defaultSize={sizes[index]} className="panel" collapsible>
            <div className="panel-content">
              Panel {index + 1}
              <button onClick={() => togglePanel(index)} className="close-button">
                <FaTimes />
              </button>
            </div>
          </Panel>
          {index < panelRefs.length - 1 && <PanelResizeHandle className="resize-handle" />}
        </React.Fragment>
      ))}
    </PanelGroup>
  );
};

export default ResizablePanels;