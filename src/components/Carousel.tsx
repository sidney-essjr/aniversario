"use client";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { Image } from "./helpers/data";

export default function Carousel({ data }: { data: Image[] }) {
  const settings: SwiperProps = {
    slidesPerView:  2.6,
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: "coverflow",
  };

  return (
    <>
      <section className="h-96 max-w-screen-xl">
        <Slider settings={settings}>
          {data.map((img, key) => (
            <SwiperSlide key={key}>
              <img className="h-96" src={img.url} alt="" />
            </SwiperSlide>
          ))}
        </Slider>
      </section>
    </>
  );
}
