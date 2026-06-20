import { Children, useState, type MouseEvent, type UIEvent } from "react";
import type { HoverPreviewProps } from "./hover-preview.types";

export function useModel(props: HoverPreviewProps) {
  const items = Children.toArray(props.children);
  const [activeIndex, setActiveIndex] = useState(0);

  function selectIndex(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), items.length - 1);
    if (nextIndex === activeIndex) return;

    setActiveIndex(nextIndex);
    props.onIndexChange?.(nextIndex);
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const progress = (event.clientX - left) / width;

    const nextIndex = Math.min(Math.floor(progress * items.length), items.length - 1);
    selectIndex(nextIndex);
  }

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const { scrollLeft, clientWidth } = event.currentTarget;
    selectIndex(Math.round(scrollLeft / clientWidth));
  }

  return { items, activeIndex, selectIndex, handleMouseMove, handleScroll };
}
