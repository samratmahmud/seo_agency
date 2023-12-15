import React from "react";

const revenueRannking = [
  {
    icon: "/images/check.svg",
    title: "On-page optimizing your web pages to improve rankings",
  },
  {
    icon: "/images/check.svg",
    title: "Keyword research to identify relevant search and phrases",
  },
  {
    icon: "/images/check.svg",
    title: "Continuously monitor search engine algorithm changes",
  },
];

function RankingRevenue() {
  return (
    <section>
      <div className="container my-32">
        <div className="flex gap-24 items-center justify-between">
          <div>
            <h2 className="text-9xl font-Familjen font-bold mb-6">
              Increase revenue with custom SEO
            </h2>
            <p className="text-lg -tracking-wide mb-12">
              Our SEO agency will help you reach new audiences, increase your
              website performance, and accelerate your reputation.
            </p>
            <div className="flex flex-col gap-5">
              {revenueRannking.map(({icon, title}, index) => (
                <div key={index} className="flex gap-2.5">
                  <img src={icon} alt="" />
                  <p className="text-lg font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="relative max-w-[516px]">
            <img src="/images/thumb2.png" alt="" />
            <div className="absolute bottom-0 -right-[15%]">
              <img src="/images/shape1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RankingRevenue;
