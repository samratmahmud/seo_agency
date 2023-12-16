import Link from "next/link";
import React from "react";

const serviceCards = [
  {
    logo: "/images/icon1.svg",
    title: "On-Page SEO",
    contain:
      "On-page SEO aims to improve users website content and structure to improve its ranking on search engine results pages.",
    className: "bg-blue-400",
  },
  {
    logo: "/images/icon2.svg",
    title: "Technical SEO",
    contain:
      "Technical SEO helps search engines crawl & index a site more effectively. Its performance and accessibility to search engines.",
    className: "bg-orenge-300",
  },
  {
    logo: "/images/icon3.svg",
    title: "Technical SEO",
    contain:
      "Technical SEO helps search engines crawl & index a site more effectively. Its performance and accessibility to search engines.",
    className: "bg-fuchsia-300",
  },
  {
    logo: "/images/icon4.svg",
    title: "Technical SEO",
    contain:
      "Technical SEO helps search engines crawl & index a site more effectively. Its performance and accessibility to search engines.",
    className: "bg-yellow-300",
  },
];

function Services() {
  return (
    <section className="bg-black lg:py-32 md:py-24 py-20">
      <div className="container">
        <h2 className="2xl:text-9xl xl:text-3xl md:text-13xl sm:text-14xl text-15xl text-gray-200 font-bold font-Familjen text-center max-w-[800px] m-auto mb-20">
          Our professional SEO services for you
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {serviceCards.map(({logo, title, contain, className}, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={`${index * 400}`}
              key={index}
              className={`${className} flex gap-6 md:p-10 p-[30px] rounded-[20px] hover:scale-95 duration-500`}
            >
              <div className="flex-shrink-0">
                <img src={logo} alt="" />
              </div>
              <div>
                <h3 className="lg:text-10xl text-11xl font-bold font-Familjen mb-5">
                  {title}
                </h3>
                <p className="text-base mb-6">{contain}</p>
                <Link href="">
                  <img
                    className="hover:translate-x-2 duration-500"
                    src="/images/arrow-right4.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
