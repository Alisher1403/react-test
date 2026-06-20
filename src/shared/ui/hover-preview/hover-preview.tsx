import { twMerge } from "tailwind-merge";
import { useModel } from "./hover-preview.model";
import type { HoverPreviewProps } from "./hover-preview.types";

export function HoverPreview(props: HoverPreviewProps) {
  const { items, activeIndex, setActiveIndex, handleMouseMove } = useModel(props);

  return (
    <div
      className={twMerge("relative overflow-hidden", props.className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIndex(0)}
    >
      {items[activeIndex]}
    </div>
  );
}
