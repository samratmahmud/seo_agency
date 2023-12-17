import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="md:pt-[89px] pt-[61px]">
      <hr className="border border-black relative -z-40" />
      <div className="container pt-20 lg:pt-0">
        <div className="lg:max-w-[1640px] lg:mr-[calc((-100vw_+_100%)_/_2)]">
          <div className="flex lg:flex-row flex-col items-center gap-10">
            <div className="lg:w-[54%]">
              <h3 className="lg:text-xl text-12xl font-semibold lg:mb-5 mb-2.5 text-center lg:text-left">
                #1 SEO agency for fast-growing companies
              </h3>
              <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-8xl font-Familjen font-bold mb-7 text-center lg:text-left">
                Provides the best ranking experience
              </h1>
              <p className="lg:text-lg text-base mb-12 text-center lg:text-left">
                We work to improve your business visibility within search
                engines, boost organic traffic to your website and rank for the
                most valuable keywords.
              </p>
              <div className="mb-5">
                <label className="flex justify-between max-w-[526px] m-auto lg:ml-0 items-center border-2 border-black rounded-[50px]">
                  <input
                    className="text-md font-bold placeholder:text-black pr-3 sm:pr-0  pl-6 focus:outline-none bg-transparent w-full py-1 sm:py-0"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <Link href="" className="p-1 hidden sm:block">
                    <Buttons
                      className="px-9"
                      name1="Get started"
                      name2="Get started"
                    />
                  </Link>
                </label>
                <Link href="" className="p-1 sm:hidden">
                  <Buttons
                    className="px-9 text-center"
                    name1="Get started"
                    name2="Get started"
                  />
                </Link>
              </div>
              <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-2">
                <span className="flex justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img src="/images/star.svg" alt="" />
                  ))}
                </span>
                <span className="text-base font-semibold ml-1 text-center sm:text-left">
                  4.8/5 stars based on 1K client reviews
                </span>
              </div>
            </div>
            <div className="lg:w-[46%] relative z-0">
              <span className="absolute top-[60%] -z-10 animate__animated animate__fadeInRight hidden md:block">
                <img
                  className="-translate-x-24 max-w-[212px]"
                  src="/images/star-shape.png"
                  alt=""
                />
              </span>
              <span className="absolute top-[54%] left-1/2 hidden md:inline">
                <img src="/images/shape-ayna.png" alt="" />
              </span>
              <span className="absolute top-[66%] left-3/4 movement hidden md:block">
                <img src="/images/shape-monitor.png" alt="" />
              </span>
              <div className="">
                <img
                  className="md:border-l-[3px] md:border-b-[3px] border-black md:rounded-bl-[500px] md:max-w-[758px] max-h-[922px]"
                  src="/images/hero-thumb.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
