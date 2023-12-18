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
      <div className="container lg:my-32 md:my-20 my-20 overflow-hidden md:overflow-visible">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-24 gap-10 items-center justify-between">
          <div>
            <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl font-bold md:mb-6 mb-4 font-Familjen text-center lg:text-left">
              Increase revenue with custom SEO
            </h2>
            <p className="md:text-lg text-base text-center lg:text-left lg:-tracking-wide mb-12">
              Our SEO agency will help you reach new audiences, increase your
              website performance, and accelerate your reputation.
            </p>
            <div className="flex flex-col gap-5">
              {revenueRannking.map(({icon, title}, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <img className="flex-shrink-0" src={icon} alt="" />
                  <p className="md:text-lg text-base font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="relative lg:max-w-[516px]">
            <img className="" src="/images/thumb2.png" alt="" />
            <div className="absolute bottom-0 -right-[15%] hidden md:block">
              <img src="/images/shape1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RankingRevenue;
