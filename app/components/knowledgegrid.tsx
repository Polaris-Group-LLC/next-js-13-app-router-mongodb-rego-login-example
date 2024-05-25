import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import './knowledgegrid.css';
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";
import DatabaseMenu from './data/DatabaseMenu';

export default function Component() {
  const [isOpen, setIsOpen] = useState(true);
  const [panelStates, setPanelStates] = useState({
    knowledge: true,
    collections: true,
    chatConfig: true,
    chatWith: true,
    main: true,
    rightSidebar: true,
  });

  const togglePanel = (panel) => {
    setPanelStates((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  return (
    <div className="knowledge-grid">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
      </button>
      {isOpen && (
        <ResizablePanelGroup
          className="mx-2 h-full max-h-[100%] max-w-full rounded-lg border border-[#217CAF]"
          direction="horizontal"
        >
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full flex-col items-left p-6" style={{ overflow: 'hidden' }}>
              <button onClick={() => togglePanel('knowledge')} className="panel-toggle-button">
                {panelStates.knowledge ? 'Close' : 'Open'} Knowledge
              </button>
              {panelStates.knowledge && (
                <>
                  <p style={{ color: 'white' }}>Knowledge2</p>
                  <DatabaseMenu />
                </>
              )}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full items-center justify-center p-6">
              <button onClick={() => togglePanel('collections')} className="panel-toggle-button">
                {panelStates.collections ? 'Close' : 'Open'} Collections
              </button>
              {panelStates.collections && <span className="font-semibold">Collections</span>}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full items-center justify-center p-6">
              <button onClick={() => togglePanel('chatConfig')} className="panel-toggle-button">
                {panelStates.chatConfig ? 'Close' : 'Open'} Chat Config
              </button>
              {panelStates.chatConfig && <span className="font-semibold">Chat Config</span>}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={10}>
            <div className="flex h-full items-center justify-center p-6">
              <button onClick={() => togglePanel('chatWith')} className="panel-toggle-button">
                {panelStates.chatWith ? 'Close' : 'Open'} Chat With
              </button>
              {panelStates.chatWith && <span className="font-semibold">Chat With</span>}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <button onClick={() => togglePanel('main')} className="panel-toggle-button">
                {panelStates.main ? 'Close' : 'Open'} Main
              </button>
              {panelStates.main && <span className="font-semibold">Main</span>}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={10}>
            <div className="flex h-full items-center justify-center p-6">
              <button onClick={() => togglePanel('rightSidebar')} className="panel-toggle-button">
                {panelStates.rightSidebar ? 'Close' : 'Open'} Right Sidebar
              </button>
              {panelStates.rightSidebar && <span className="font-semibold">Right Sidebar</span>}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
    </div>
  );
}