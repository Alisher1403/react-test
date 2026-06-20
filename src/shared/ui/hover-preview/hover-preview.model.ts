import { Children, useState, type MouseEvent } from "react";
import type { HoverPreviewProps } from "./hover-preview.types";

export function useModel(props: HoverPreviewProps) {
  const items = Children.toArray(props.children);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const progress = (event.clientX - left) / width;

    const nextIndex = Math.min(Math.floor(progress * items.length), items.length - 1);

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  }

  return { items, activeIndex, setActiveIndex, handleMouseMove };
}
