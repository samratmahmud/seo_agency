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
        <div className="my-[100px]">
          <img src="/images/logo-large.svg" alt="" />
        </div>
        <hr className="border border-gray-300" />
        <div className="py-9 flex items-center gap-3 justify-between">
          <div className="text-base font-semibold">
            ©Copyright 2023, All Rights Reserved by Mthemeus
          </div>
          <div className="flex gap-10">
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
