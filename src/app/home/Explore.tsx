import Buttons from "@/components/common/Buttons";
import React from "react";

function Explore() {
  return (
    <section>
      <div className="container lg:my-32 md:my-24 my-20">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-between">
          <div className="lg:w-[42%]">
            <div data-aos="fade-right" className="relative">
              <img src="/images/thumb1.png" alt="" />
              <div className="absolute bottom-0 -left-[26%]">
                <img src="/images/shape2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl font-bold md:mb-6 mb-4 font-Familjen text-center lg:text-left">
              We strive for the best SEO quality
            </h2>
            <div className="md:text-lg text-base md:mb-11 mb-7 text-center lg:text-left">
              <p className="md:mb-7 mb-5">
                We are a leading SEO company dedicated to helping brand grow
                their online presence & achieve higher search engine rankings
                and improve digital performance.
              </p>
              <p>
                Whether you're a small local business or a global brand, we
                tailor our SEO services to meet your unique needs & goals.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Buttons
                classNames="h-[60px]"
                className="py-1.5 px-8"
                name1="Explore more"
                name2="Explore more"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
