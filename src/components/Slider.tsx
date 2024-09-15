import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pic from "@/assets/hero-img.png";
import { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "THE DIGITAL AGENCY.",
    subtitle: "MARKETING | TECH | CONTENT ",
    description:
      "Endless creativity and skill. We blend innovation with strategy to provide top-notch solutions.",
    imageUrl: Pic,
  },
  {
    id: 2,
    title: "BEHIND EVERY FAVORITE PRODUCT",
    subtitle: "THERE IS AN UNTOLD STORY.",
    description:
      "Don’t be a part of the negative statistics, make your product standout with inevitable breakthrough marketing that speaks for itself",
    imageUrl: Pic,
  },
  {
    id: 3,
    title: "GOT CONTENT? OR WOULD LIKE TO MAKE ONE?",
    subtitle: "WE’VE GOT SOME CRAZY IDEAS!",
    description:
      "And of course, we’ve got the equipment to make it happen too. We handle PR campaigns and tech developments.",
    imageUrl: Pic,
  },
  {
    id: 4,
    title: "NO ORDINARY AGENCY.",
    subtitle: "STORYTELLING || USER-FRIENDLY PRODUCTS || EXCEPTIONAL MARKETING STRATEGIES",
    description:
      "These are the core elements of our work at PLAYCRAFT.",
    imageUrl: Pic,
  },
];

export default function Slider() {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const slideNext = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    };

    const intervalId = setInterval(slideNext, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full pb-10" id="home">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper"
        loop={true}
        ref={swiperRef}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="pt-8 md:pt-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-32 h-[600px] gap-8 md:gap-0">
              <div className="md:w-1/2 flex items-start flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  {slide.title}
                </h2>
                <h3 className="md:text-lg font-medium mt-2">{slide.subtitle}</h3>
                <p className="text-sm md:text-base md:w-[85%] text-[#777777]">{slide.description}</p>
                <a
                  href="#contact"
                  className="mt-2 p-4 px-8 text-sm font-medium bg-primary text-white rounded-lg"
                >
                  Get Started
                </a>
              </div>
              <div className="md:w-1/2 relative">
                <Image
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  height={450}
                  width={500}
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
