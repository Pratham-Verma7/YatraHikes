"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/autoplay";
import TrekCard from "./TrekCard";
import { treks } from "@/data/treks";

export default function FeaturedTreks() {
  const swiperRef = useRef<SwiperClass | null>(null);

  // Find the active index for dot navigation
  // We'll use a state to track the active index
  // Swiper's onSlideChange event gives us the realIndex
  // so we can sync the dots with the current slide
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-0 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Featured Treks</h2>
        <p className="text-gray-800 max-w-2xl mx-auto font-body">
          Explore our most popular treks, carefully curated for an unforgettable experience
        </p>
      </div>
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={32}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {treks.map((trek) => (
            <SwiperSlide key={trek.id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={`transition-all duration-500 flex flex-col justify-end h-[480px] ${
                    isActive
                      ? "scale-110 -translate-y-8 z-20 shadow-2xl"
                      : "scale-95 translate-y-0 z-10 opacity-80"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 8px 32px 0 rgba(34,197,94,0.15), 0 2px 8px 0 rgba(0,0,0,0.08)"
                      : "0 2px 8px 0 rgba(0,0,0,0.06)",
                  }}
                >
                  <TrekCard trek={trek} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dots navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {treks.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all swiper-pagination-bullet ${
                activeIndex === idx ? "bg-green-600" : "bg-green-200"
              }`}
              onClick={() => {
                swiperRef.current?.slideToLoop(idx);
              }}
              aria-label={`Go to trek ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 