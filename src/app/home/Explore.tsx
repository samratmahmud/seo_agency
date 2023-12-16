import Buttons from "@/components/common/Buttons";
import React from "react";

function Explore() {
  return (
    <section>
      <div className="container my-32">
        <div className="flex gap-20 justify-between">
          <div className="w-[42%]">
            <div data-aos="fade-right" className="relative">
              <img src="/images/thumb1.png" alt="" />
              <div className="absolute bottom-0 -left-[26%]">
                <img src="/images/shape2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <h2 className="text-9xl font-bold mb-6 font-Familjen">
              We strive for the best SEO quality
            </h2>
            <div className="text-lg mb-11">
              <p className="mb-7">
                We are a leading SEO company dedicated to helping brand grow
                their online presence & achieve higher search engine rankings
                and improve digital performance.
              </p>
              <p>
                Whether you're a small local business or a global brand, we
                tailor our SEO services to meet your unique needs & goals.
              </p>
            </div>
            <div className="flex">
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