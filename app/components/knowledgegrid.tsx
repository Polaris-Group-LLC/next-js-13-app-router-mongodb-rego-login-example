import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import './knowledgegrid.css';
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"

export default function Component() {
  return (
    <ResizablePanelGroup
      className="mx-2 h-full max-h-[100%] max-w-full rounded-lg border border-[#217CAF]"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Databases</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Collections</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Chat Config</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={10}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Chat With</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Main</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={10}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Right Sidebar</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}