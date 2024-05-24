'use client';
import React, { useState, useRef, useEffect } from 'react';

const ResizablePanel = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width;
    const startHeight = height;

    const onMouseMove = (e: MouseEvent) => {
      if (direction.includes('right')) {
        setWidth(startWidth + e.clientX - startX);
      }
      if (direction.includes('bottom')) {
        setHeight(startHeight + e.clientY - startY);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      ref={panelRef}
      className="bg-[#000000] text-white flex-1 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-none border-4 border-[#FF6A00] mt-[-8px] p-4 flex flex-col justify-between font-montserrat"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="flex justify-between items-center">
        <span>Resizable Panel</span>
        <div className="flex items-center">
          <button className="p-1 hover:bg-gray-700 rounded-full">
            <MinusIcon className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded-full">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto" />
      <div className="resizers">
        <div
          className="resizer right-resizer"
          onMouseDown={(e) => handleMouseDown(e, 'right')}
        />
        <div
          className="resizer bottom-resizer"
          onMouseDown={(e) => handleMouseDown(e, 'bottom')}
        />
        <div
          className="resizer bottom-right-resizer"
          onMouseDown={(e) => handleMouseDown(e, 'bottom-right')}
        />
      </div>
    </div>
  );
};

export default ResizablePanel;