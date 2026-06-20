import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const activeImage = selectedImage && images.includes(selectedImage) ? selectedImage : images[0];

  if (!activeImage) {
    return <div className="aspect-square w-full rounded-xl bg-container-primary sm:rounded-2xl" />;
  }

  return (
    <div className="grid w-full min-w-0 max-w-150 gap-3 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-4">
      <div className="order-2 flex gap-2 overflow-x-auto pb-1 sm:order-1 sm:flex-col sm:overflow-visible sm:pb-0">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`size-16 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-container-primary p-1 ring-2 transition sm:size-18 sm:rounded-xl ${image === activeImage ? "ring-label" : "ring-transparent hover:ring-gray-300"}`}
          >
            <img src={image} alt="" className="h-full w-full object-contain" />
          </button>
        ))}
      </div>

      <div className="order-1 flex aspect-square min-w-0 items-center justify-center overflow-hidden rounded-xl bg-container-primary p-3 sm:order-2 sm:rounded-2xl sm:p-6">
        <img src={activeImage} alt={title} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
