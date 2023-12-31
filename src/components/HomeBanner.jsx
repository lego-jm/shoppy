import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const urlArr = [
  "https://image.brandi.me/home/banner/bannerImage_1381279_1699862715.jpg",
  "https://image.brandi.me/home/banner/bannerImage_1_1699591157.jpg",
  "https://image.brandi.me/home/banner/bannerImage_2_1699591157.jpg",
  "https://image.brandi.me/home/banner/bannerImage_3_1699591157.jpg",
  "https://image.brandi.me/home/banner/bannerImage_1378012_1699586939.jpg",
  "https://image.brandi.me/home/banner/bannerImage_1378002_1699586939.jpg",
  "https://image.brandi.me/home/banner/bannerImage_1378000_1699586939.jpg",
];

export default function HomeBanner() {
  return (
    <Swiper
      className="relative"
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
    >
      {urlArr.map((item, index) => (
        <SwiperSlide className="relative" key={index}>
          <img src={item} alt="banner-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
