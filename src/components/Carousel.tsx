import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { Image } from "./helpers/data";
import { useMedia } from "use-media";

export default function Carousel({ data }: { data: Image[] }) {
  const isWideScreen = useMedia({ minWidth: "440px" });

  const settings: SwiperProps = {
    slidesPerView: isWideScreen ? 3 : 1.8,
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
      <section className="h-[500] max-w-screen-xl">
        <Slider settings={settings}>
          {data.map((img, key) => (
            <SwiperSlide key={key}>
              <img className="h-[350px] w-[230px] lg:h-[550px] sm:w-[430px]" src={img.url} alt="" />
            </SwiperSlide>
          ))}
        </Slider>
      </section>
    </>
  );
}
