"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import '../../globals.css';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
tabs: propTabs,
  containerClassName,
  activeTabClassName = "active", // Default active class name
  tabClassName = "tab", // Default tab class name
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar h-100 max-h-full max-w-full w-full"
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn(
            "relative px-4 py-2 rounded-t-lg border-4 border-b-0",
            tabClassName,
            { 'active': active.value === tab.value } // Apply 'active' class conditionally
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {tab.title}
        </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-4", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
    className,
    tabs,
    active,
    hovering,
  }: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
  }) => {
    return (
      <div className="relative flex-1 h-full max-h-full max-w-full w-full border-4 border-[#217CAF]" style={{borderRadius: "0 10px 10px 0"}}>
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              display: 'block', // Always render the content
              visibility: active.value === tab.value ? 'visible' : 'hidden', // Control visibility based on active tab
              position: 'absolute', // Position all tabs absolutely to stack them
              width: '100%', // Ensure all tabs take full width
              height: '100%', // Ensure all tabs take full height
              top: 0, // Align all tabs at the top of the container
              left: 0, // Align all tabs at the left of the container
              zIndex: active.value === tab.value ? 1 : 0, // Ensure active tab is on top
              opacity: active.value === tab.value ? 1 : 0, // Fade out inactive tabs
            }}
            animate={{
              y: active.value === tab.value ? [0, 40, 0] : 0,
            }}
            className={cn("vh-100 absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    );
  };
