/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nDmBHFdEH5D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';
import React from 'react';
import { TabsDemo } from '@/tabConfig';
import './globals.css';
import Draggable from 'react-draggable';
import CleoChatComponent from '@/components/CleoChatComponent';
import { Avatar } from "@/components/ui/avatar";
import LeftCtrlButton from '@/components/ui/LeftCtrlButton';
import RightCtrlButton from '@/components/ui/RightCtrlButton';

export default function Layout() {
  return (
    <html lang="en">
      <body>
        <div
          key="1"
          className="border-4 border-[#FFFF00] rounded-lg p-1 bg-gradient-to-b from-[#000000] to-[#217CAF] min-h-screen flex flex-row relative pt-20 pb-2 pl-3 pr-3"
        >
          <div className="absolute top-0 left-0 w-full text-white py-2 px-4 z-10 flex justify-between items-center">
            <img
              alt="Logo"
              className="object-contain"
              src="/images/neucleos_logo.png"
              style={{
                transform: "scale(0.4)",
                transformOrigin: "top left",
              }}
            />
            <div className="mx-auto"></div>
            <Avatar src="/images/avatar.png" alt="@shadcn" className="w-10 h-10" initials="CN" />
          </div>
          <div className="flex flex-col w-[40px] mr-0 mt-[40px] font-montserrat">
            <LeftCtrlButton imageSrc="/icons/icon23.png" hoverText="Description 1" />
            <LeftCtrlButton imageSrc="/icons/icon2.png" hoverText="Description 2" />
            <LeftCtrlButton imageSrc="/icons/icon3.png" hoverText="Description 3" />
            <LeftCtrlButton imageSrc="/icons/icon4.png" hoverText="Description 4" />
            <LeftCtrlButton imageSrc="/icons/icon25.png" hoverText="Description 5" />
            <LeftCtrlButton imageSrc="/icons/icon6.png" hoverText="Description 6" />
            <LeftCtrlButton imageSrc="/icons/icon7.png" hoverText="Description 7" />
            <LeftCtrlButton imageSrc="/icons/icon8.png" hoverText="Description 8" />
            <LeftCtrlButton imageSrc="/icons/icon9.png" hoverText="Description 9" />
          </div>
          <div className="flex w-[400px] mx-auto rounded-lg flex-col">
            {/*Cleo Container*/}
            <div className="bg-[#000000] max-h-[100vh] overflow-auto text-white flex-1 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-none border-4 border-[#FF6A00] mt-[0px] p-4 flex flex-col justify-between font-montserrat mt-50">
              <CleoChatComponent />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-0">
              <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat border-4 border-green-500" />
              <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat" />
              <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat" />
              <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-lg p-2 flex items-center w-[25px] font-montserrat" />
            </div>
            <div className="bg-[#000000] text-white flex-1 rounded-lg border-4 border-[#12b656] mt-[-8px] p-6 rounded-br-lg rounded-bl-none rounded-tl-none font-montserrat grid grid-cols-[100%] max-w-full max-h-90% overflow-hidden">
              <TabsDemo />
            </div>
          </div>
          <div className="flex flex-col w-[50px] mr-0 font-montserrat">
            <div className="bg-[#000000] text-white h-[40px] flex items-center justify-center" />

            <div>
              <RightCtrlButton imageSrc="/icons/icon25.png" hoverText="Description 5" />
              
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 