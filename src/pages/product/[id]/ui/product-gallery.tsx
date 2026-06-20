import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div className="w-full min-w-0 max-w-150">
      <div className="-mx-2 lg:hidden">
        <Swiper spaceBetween={4} grabCursor>
          {images.map((image, index) => (
            <SwiperSlide key={image}>
              <div className="aspect-3/4 overflow-hidden rounded-xl bg-container-primary">
                <img src={image} alt={`${title} ${index + 1}`} className="h-full w-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="hidden w-full min-w-0 grid-cols-[4.5rem_minmax(0,1fr)] gap-4 lg:grid">
        <div className="flex flex-col gap-2">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`size-18 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-container-primary p-1 ring-2 transition ${image === activeImage ? "ring-label" : "ring-transparent hover:ring-gray-300"}`}
            >
              <img src={image} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>

        <div className="flex aspect-square min-w-0 items-center justify-center overflow-hidden rounded-2xl bg-container-primary p-6">
          <img src={activeImage} alt={title} className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
