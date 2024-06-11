"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center pl-0.5",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full bg-white/30 grow">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[#FF5C01] to-[#FFD25F]" />
    </SliderPrimitive.Track>
    {/* <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" /> */}
    <SliderPrimitive.Thumb className="block w-6 h-6 transition-colors border-[5.5px] border-solid rounded-full border-[#FFD05D] bg-[#1B1B1B] focus:outline-none" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
