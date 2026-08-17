import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5"
          style={{
            background: `
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
>

          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Electronics, Books, Stationery & Garments
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              UP TO 30% OFF — ELECTRONICS, BOOKS, STATIONERY & GARMENTS
            </h2>

            <p>
              Shop mobile accessories, smart gadgets, computer accessories, home
              electronics, books, stationery, and fashion for men, women & kids. Quality
              products at great prices, delivered across India.
            </p>

            <a
              href="/shop"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Shop Now
            </a>
          </div>

          <Image
            src="/images/HomePageImages/6.webp"
            alt="Electronics and gadgets"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10"
            style={{
      backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
    }}

          >
            <Image
              src="/images/HomePageImages/7.webp"
              alt="Books and stationery"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Books & Stationery
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Office Essentials
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                Flat 20% off on select items
              </p>

              <a
                href="/shop"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10"
            style={{
              backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
            }}
          >
            <Image
              src="/images/HomePageImages/5.webp"
              alt="Fashion apparel"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Men&apos;s, Women&apos;s & Kids&apos; Wear
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Up to <span className="text-orange">40%</span> off
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                Fresh styles in garments for the whole family. Quality fabric,
                great fits for the whole family.
              </p>

              <a
                href="/shop"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
