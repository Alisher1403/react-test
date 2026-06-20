import { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { HoverPreviewProps } from "./hover-preview.types";

export function HoverPreview(props: HoverPreviewProps) {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!children) return null;

  return (
    <div className={twMerge("relative overflow-hidden", props.className)} onMouseOut={() => setActiveIndex(0)}>
      {children[activeIndex]}
      <div className="absolute inset-0 flex">
        {Array.from({ length: children?.length || 0 }).map((_, i) => (
          <div key={i} className="grow" onMouseOver={() => setActiveIndex(i)} />
        ))}
      </div>
    </div>
  );
}
