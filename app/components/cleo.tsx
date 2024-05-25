'use client';
import React from 'react';

const ResizablePanel = () => {
  return (
    <div
      className="bg-[#000000] text-white flex-1 rounded-lg border-4 border-[#FF6A00] mt-[-8px] p-4 flex flex-col justify-between font-montserrat"
      style={{ width: '400px', height: '300px' }} // Set fixed width and height
    >
      <div className="flex justify-between items-center">
        <span>Resizable Panel</span>
      </div>
      <div className="flex-1 overflow-auto" />
    </div>
  );
};

export default ResizablePanel;