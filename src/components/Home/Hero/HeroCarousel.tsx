"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="flex-shrink-0 max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                Your
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Everyday
                <br />
                Store
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Electronics, Stationery, Books & Garments
            </h1>

            <p>
              Everything you need—gadgets, study supplies, books and fashion. Quality products at great prices, delivered across India.
            </p>

            <Link
              href="/shop"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-500 py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Go To Shop
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center sm:justify-end w-full min-h-[260px] sm:min-h-0 pr-4 sm:pr-7.5 lg:pr-12.5 py-4 sm:py-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[480px] h-[260px] sm:h-auto sm:aspect-square">
              <Image
                src="/images/HomePageImages/1.webp"
                alt="headphone"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="flex items-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="flex-shrink-0 max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5" >
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Electronics, Books, Stationery & More
            </h1>

            <p>
              Shop electronics, stationery, books, garments and more. Best deals and honest prices for the Indian market.
            </p>

            <Link
              href="/shop"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-500 py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Go To Shop
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center sm:justify-end w-full min-h-[260px] sm:min-h-0 pr-4 sm:pr-7.5 lg:pr-12.5 py-4 sm:py-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[480px] h-[260px] sm:h-auto sm:aspect-square">
              <Image
                src="/images/HomePageImages/2.webp"
                alt="Shopping bag"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
