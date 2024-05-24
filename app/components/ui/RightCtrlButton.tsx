'use client';

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", side = "right", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    side={side}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

interface RightCtrlButtonProps {
  imageSrc: string;
  hoverText: string;
}

const RightCtrlButton: React.FC<RightCtrlButtonProps> = ({ imageSrc, hoverText }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="right-ctrl-button">
          <img
            src={imageSrc}
            alt={hoverText}
            className="right-ctrl-button-img"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 standard-border" side="left">
        <div className="flex justify-between space-x-4">
          <Button className="large-button">
            <img src={imageSrc} alt={hoverText} className="large-button-img" />
          </Button>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold popup-text">@nextjs</h4>
            <p className="text-sm popup-text">
              {hoverText} {/* Use the hoverText here */}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs popup-text-muted">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default RightCtrlButton;