"use client";

import Image from "next/image";
import { Tabs } from "components/ui/tabs";
import DatabaseMenu from './components/data/DatabaseMenu';
import knowledgegrid from './components/KnowledgeGrid';
import ResizablePanels from './components/kg2';
import HPanel from './components/hPanel';

export function TabsDemo() {
    const tabs = [
      {
        title: "Knowledge",
        value: "knowledge",
        content: (
          <div className="tab-content" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: 'calc(100% - 20px)',
              height: 'calc(100% - 20px)',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              <HPanel />
            </div>
          </div>
        ),
      },
      {
        title: "Grid",
        value: "grid",
        content: (
          <div className="tab-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', minHeight: '0' }}>
            <div className="flex flex-col items-center flex-grow border-2" style={{ minHeight: '0', overflow: 'hidden' }}>
              <p style={{ color: 'white' }}>Grid Tab</p>
              <div className="flex flex-col w-full items-center flex-grow border-2" style={{overflow: 'hidden' }}>
              {/*knowledgegrid()} {/* Using the imported function */}
            </div>
            </div>
          </div>
        )
      },
      {
        title: "KG2",
        value: "kg2",
        content: (
          <div className="tab-content" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: 'calc(100% - 20px)',
              height: 'calc(100% - 20px)',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              <ResizablePanels />
            </div>
          </div>
        ),
      },
      {
        title: "Content",
        value: "content",
        content: (
          <div className="tab-content">
            <p>Content tab</p>
            <DummyContent />
          </div>
        ),
      },
      {
        title: "Random",
        value: "random",
        content: (
          <div className="tab-content">
            <p>Random tab</p>
            <DummyContent />
          </div>
        ),
      },
    ];

    return (
      <div className="tabs-container" style={{ height: '100%', maxHeight: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
        <Tabs tabs={tabs} />
      </div>
    );
}

const DummyContent = () => {
    return (
      <div className="flex border-2 vh-100 max-h-full overflow-auto p-5 m-2 flex-grow bg-blue-500">
        {/* Content here */}
      </div>
    );
};