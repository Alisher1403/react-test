import { cloneElement, isValidElement, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useModel } from "./image-preview.model";
import type { ImagePreviewProps } from "./image-preview.types";

type ImageElementProps = {
  alt?: string;
  className?: string;
};

function renderImage(item: React.ReactNode, className: string) {
  if (!isValidElement(item)) return item;

  const image = item as ReactElement<ImageElementProps>;
  return cloneElement(image, { className: twMerge(image.props.className, className) });
}

export function ImagePreview(props: ImagePreviewProps) {
  const { items, activeIndex, isOpen, setActiveIndex, showPrevious, showNext, close } = useModel(props);

  if (!isOpen || items.length === 0 || typeof document === "undefined") return null;

  const preview = (
    <div
      role="dialog"
      className="fixed inset-0 z-50 overflow-hidden bg-black md:bg-white"
    >
      <button
        onClick={close}
        className="fixed top-5 right-5 z-30 grid size-11 cursor-pointer place-items-center rounded-full bg-black/35 text-3xl leading-none text-white shadow-sm backdrop-blur-sm transition hover:scale-105 md:bg-white md:text-label"
      >
        ×
      </button>

      <div className="fixed top-3 bottom-3 left-3 z-20 hidden w-24 flex-col gap-2 overflow-y-auto pr-2 md:flex">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`aspect-square w-full shrink-0 cursor-pointer overflow-hidden rounded-lg bg-white ring-2 transition ${index === activeIndex ? "ring-label" : "ring-transparent hover:ring-gray-300"}`}
          >
            {renderImage(item, "h-full w-full object-cover")}
          </button>
        ))}
      </div>

      <div className="flex h-full w-full items-center justify-center px-0 pt-20 pb-28 md:px-40 md:py-0">
        <div className="flex h-full w-full max-w-4xl items-center justify-center overflow-hidden">
          {renderImage(items[activeIndex], "max-h-full max-w-full object-contain")}
        </div>
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={showPrevious}
            className="fixed top-1/2 left-4 z-20 hidden size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white text-2xl shadow-md transition hover:scale-105 md:grid md:left-28"
          >
            ←
          </button>
          <button
            onClick={showNext}
            className="fixed top-1/2 right-4 z-20 hidden size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white text-2xl shadow-md transition hover:scale-105 md:grid"
          >
            →
          </button>
        </>
      )}

      <div className="fixed right-0 bottom-5 left-0 z-20 flex gap-2 overflow-x-auto px-4 md:hidden">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`size-16 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white ring-2 ring-offset-2 ring-offset-black transition ${index === activeIndex ? "ring-white" : "ring-transparent"}`}
          >
            {renderImage(item, "h-full w-full object-cover")}
          </button>
        ))}
      </div>
    </div>
  );

  return createPortal(preview, document.body);
}
