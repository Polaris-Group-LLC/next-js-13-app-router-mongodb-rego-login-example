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

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar h-100 max-h-full max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-4 py-2 rounded-t-lg border-4 border-b-0",
              tabClassName,
              { [activeTabClassName]: active.value === tab.value } // Apply 'active' class conditionally
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
        active={active}
        className={cn("mt-4", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  active,
}: {
  className?: string;
  active: Tab;
}) => {
  return (
    <div className="relative flex-1 h-full max-h-full max-w-full w-full border-4 border-[#217CAF]" style={{ borderRadius: "0 10px 10px 0" }}>
      <motion.div
        key={active.value}
        layoutId={active.value}
        style={{
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
          opacity: 1,
        }}
        animate={{
          y: [0, 40, 0],
        }}
        className={cn("vh-100 absolute top-0 left-0", className)}
      >
        {active.content}
      </motion.div>
    </div>
  );
};