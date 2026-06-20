import { twMerge } from "tailwind-merge";
import type { IndexIndicatorProps } from "./index-indicator.types";

export function IndexIndicator({ count, activeIndex, className }: IndexIndicatorProps) {
  if (count <= 1) return null;

  const selectedIndex = Math.min(Math.max(activeIndex, 0), count - 1);

  return (
    <div className={twMerge("flex items-center justify-center gap-1", className)}>
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={index === selectedIndex ? "h-1 w-3 rounded-full bg-label-secondary" : "size-1 rounded-full bg-control-secondary"}
        />
      ))}
    </div>
  );
}
