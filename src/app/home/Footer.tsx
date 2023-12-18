import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "Pages",
    path: "/",
  },
];

function Footer() {
  return (
    <section>
      <div className="container">
        <div className="md:my-[100px] my-20">
          <img src="/images/logo-large.svg" alt="" />
        </div>
        <hr className="border border-gray-300" />
        <div className="lg:py-9 py-5 px-5 lg:px-0 flex xl:flex-row flex-col items-center gap-5 justify-between">
          <div className="text-base font-semibold text-center">
            ©Copyright 2023, All Rights Reserved by Mthemeus
          </div>
          <div className="flex flex-wrap justify-center lg:gap-x-10 gap-x-5">
            {footerLinks.map(({name, path}, index) => (
              <Link key={index} href={path} className="text-base font-semibold">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
