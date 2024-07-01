import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ children, settings }: SliderProps) {
  return (
    <div className="w-full">
      <Swiper className="m-4"
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
        {...settings}
      >
        {children}
      </Swiper>
    </div>
  );
}
