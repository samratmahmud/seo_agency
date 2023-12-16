import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="pt-[89px]">
      <hr className="border border-black relative -z-40" />
      <div className="container">
        <div
          className="max-w-[1440px]"
          style={{
            marginRight: `calc((-100vw + 100% ) / 2)`,
          }}
        >
          <div className="flex items-center gap-10">
            <div className="w-[54%]">
              <h3 className="text-xl font-semibold mb-5">
                #1 SEO agency for fast-growing companies
              </h3>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-Familjen font-bold mb-7">
                Provides the best ranking experience
              </h1>
              <p className="text-lg mb-12">
                We work to improve your business visibility within search
                engines, boost organic traffic to your website and rank for the
                most valuable keywords.
              </p>
              <label className="flex justify-between max-w-[526px] items-center border-2 border-black rounded-[50px] mb-5">
                <input
                  className="text-md font-bold placeholder:text-black pl-6 focus:outline-none bg-transparent w-full
              "
                  type="email"
                  placeholder="Enter your email address"
                />
                <Link href="" className="p-1">
                  <Buttons
                    className="px-9"
                    name1="Get started"
                    name2="Get started"
                  />
                </Link>
              </label>
              <div className="flex gap-2">
                <span className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img src="/images/star.svg" alt="" />
                  ))}
                </span>
                <span className="text-base font-semibold ml-1">
                  4.8/5 stars based on 1K client reviews
                </span>
              </div>
            </div>
            <div className="w-[46%] relative z-0">
              <span className="absolute top-[60%] -z-10 animate__animated animate__fadeInRight">
                <img
                  className="-translate-x-24 max-w-[212px]"
                  src="/images/star-shape.png"
                  alt=""
                />
              </span>
              <span className="absolute top-[54%] left-1/2">
                <img src="/images/shape-ayna.png" alt="" />
              </span>
              <span className="absolute top-[66%] left-3/4 movement">
                <img src="/images/shape-monitor.png" alt="" />
              </span>
              <div className="">
                <img
                  className="border-l-[3px] border-b-[3px] border-black rounded-bl-[500px] max-w-[758px] max-h-[922px]"
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
