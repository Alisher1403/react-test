import banner1 from "@src/shared/assets/images/market-banner-1.jpg";
import banner2 from "@src/shared/assets/images/market-banner-2.jpg";
import banner3 from "@src/shared/assets/images/market-banner-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./main-banners.css";

const banners = Array.from({ length: 3 }, () => [banner1, banner2, banner3]).flat(1);

export function MainBanners() {
  return (
    <section className="main-banners overflow-hidden rounded-xl select-none sm:rounded-2xl">
      <Swiper
        centeredSlides
        grabCursor
        loop
        slideToClickedSlide
        initialSlide={1}
        slidesPerView={1.08}
        spaceBetween={8}
        breakpoints={{
          480: { slidesPerView: 1.2, spaceBetween: 12 },
          768: { slidesPerView: 1.5, spaceBetween: 16 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <img src={banner} className="aspect-12/5 w-full rounded-xl object-cover sm:rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
