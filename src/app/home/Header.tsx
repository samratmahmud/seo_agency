import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="pt-[89px]">
      <hr className="border border-black relative -z-40" />
      <div className="container">
        <div
          className=""
          style={{
            marginRight: `calc((-100vw + 100% ) / 2)`,
            maxWidth: `1610px`,
          }}
        >
          <div className=" flex items-center gap-10">
            <div className="w-[54%]">
              <h3 className="text-lg font-semibold mb-5">
                #1 SEO agency for fast-growing companies
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-Familjen font-bold mb-7">
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
            <div className="w-[46%]">
              <div className="-mr-[30%]">
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
