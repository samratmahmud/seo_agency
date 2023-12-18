import React from "react";
import Marquee from "react-fast-marquee";

function BrandingSlider() {
  return (
    <section className="bg-black p-5">
      <Marquee speed={60}>
        <div className="md:text-10xl text-16xl tracking-[1px] font-bold uppercase flex flex-row gap-6">
          <span className="text-fuchsia-400"># SEO Expert</span>
          <span className="text-yellow-300"># Content Marketing</span>
          <span className="text-blue-400"># Link Building</span>
          <span className="text-orange-300"># Digital Strategy</span>
          <span className="text-blue-400"># Google Rankings</span>
          <span className="text-accent-400"># Online Marketing</span>
          <span className="text-fuchsia-400"># SEO Expert</span>
          <span className="text-yellow-300"># Content Marketing</span>
          <span className="text-blue-400"># Link Building</span>
          <span className="text-orange-300"># Digital Strategy</span>
          <span className="text-blue-400"># Google Rankings</span>
          <span className="text-accent-400"># Online Marketing</span>
        </div>
      </Marquee>
    </section>
  );
}

export default BrandingSlider;
