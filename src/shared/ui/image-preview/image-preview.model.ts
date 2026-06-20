import { Children, useCallback, useEffect, useState } from "react";
import type { ImagePreviewProps } from "./image-preview.types";

export function useModel({ children }: ImagePreviewProps) {
  const items = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const safeActiveIndex = Math.min(activeIndex, Math.max(items.length - 1, 0));

  const showPrevious = useCallback(() => {
    if (items.length < 2) return;
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const showNext = useCallback(() => {
    if (items.length < 2) return;
    setActiveIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isOpen, showNext, showPrevious]);

  return {
    items,
    activeIndex: safeActiveIndex,
    isOpen,
    setActiveIndex,
    showPrevious,
    showNext,
    close,
  };
}
