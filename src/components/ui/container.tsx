// src/components/ui/container.tsx
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        // Base
        "w-full mx-auto",
        // Responsive max-widths (commonly used breakpoints)
        "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1440px]",
        // Horizontal padding
        "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
