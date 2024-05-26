import React, { useRef, useState, useEffect } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { FaAngleRight } from 'react-icons/fa';
import './hPanel.css';
import Panel1 from '@/panels/p1/Panel1';
import Panel2 from '@/panels/p2/Panel2';
import Panel3 from '@/panels/p3/Panel3';
import Panel4 from '@/panels/p4/Panel4';
import Panel5 from '@/panels/p5/Panel5';
import Panel6 from '@/panels/p6/Panel6';

const hPanel = () => {
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
    if (panel && panel.isCollapsed()) {
      panel.expand();
      setCollapsed(prev => {
        const newCollapsed = [...prev];
        newCollapsed[index] = false;
        return newCollapsed;
      });
    } else if (panel) {
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
              {index === 0 && <Panel1 />}
              {index === 1 && <Panel2 />}
              {index === 2 && <Panel3 />}
              {index === 3 && <Panel4 />}
              {index === 4 && <Panel5 />}
              {index === 5 && <Panel6 />}
            </div>
          </Panel>
          {index < panelRefs.length - 1 && <PanelResizeHandle className="resize-handle" />}
        </React.Fragment>
      ))}
    </PanelGroup>
  );
};

export default hPanel;