import { twMerge } from "tailwind-merge";
import { useModel } from "./hover-preview.model";
import type { HoverPreviewProps } from "./hover-preview.types";

export function HoverPreview(props: HoverPreviewProps) {
  const { items, activeIndex, selectIndex, handleMouseMove, handleScroll } = useModel(props);

  return (
    <div className={twMerge("relative overflow-hidden", props.className)}>
      <div
        onScroll={handleScroll}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-scroll scrollbar-hidden lg:hidden"
      >
        {items.map((item, index) => (
          <div key={index} className="h-full w-full shrink-0 snap-start">
            {item}
          </div>
        ))}
      </div>

      <div
        className="hidden h-full w-full lg:block"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => selectIndex(0)}
      >
        {items[activeIndex]}
      </div>
    </div>
  );
}
