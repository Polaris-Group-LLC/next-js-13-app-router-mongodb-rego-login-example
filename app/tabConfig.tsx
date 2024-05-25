"use client";

import Image from "next/image";
import { Tabs } from "components/ui/tabs";
import DatabaseMenu from './components/data/DatabaseMenu';

export function TabsDemo() {
    const tabs = [
      {
        title: "Knowledge",
        value: "knowledge",
        content: (
            <div 
            className="tab-content" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              overflow: 'hidden', 
              maxHeight: '100%', 
              borderTopLeftRadius: '0.5rem',  // Adjust the radius as needed
              borderTopRightRadius: '0.5rem', // Adjust the radius as needed
              borderBottomRightRadius: '0.5rem', // Adjust the radius as needed
              borderBottomLeftRadius: '0.5rem', // Adjust the radius as needed
            }}>
            <div className="flex flex-col items-center flex-grow border-2" style={{overflow: 'hidden' }}>
              <p style={{ color: 'white' }}>Knowledge</p>
                <DatabaseMenu />
            </div>
          </div>
        )
      },
      {
        title: "Product2",
        value: "product2",
        content: (
          <div className="tab-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', minHeight: '0' }}>
            <div className="flex flex-col items-center flex-grow border-2" style={{ minHeight: '0', overflow: 'hidden' }}>
              <p style={{ color: 'white' }}>Product2 Tab</p>
            </div>
          </div>
        )
      },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="tab-content">
          <p>Playground tab</p>
          <DummyContent />
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